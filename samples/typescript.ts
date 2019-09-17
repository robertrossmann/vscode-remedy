// @ts-nocheck

import { Server } from 'http'
import { Socket } from 'net'
import * as Koa from 'koa'
import * as koaCompress from 'koa-compress'
import * as koaBody from 'koa-bodyparser'
import * as koaCors from 'koa-cors'
import { values } from 'ramda'
import { GraphQLSchema } from 'graphql'
import { ApolloServer, ApolloError } from 'apollo-server-koa'
import { buildSchema } from 'type-graphql'
import * as depthLimit from 'graphql-depth-limit'
import { authChecker } from './graphql/helpers/authorization'
import { ErrorTrackExtension } from './graphql/helpers/error-track-ext'
import * as mdw from './middleware'
import { initLoaders } from './graphql/loaders'
import * as resolvers from './graphql/resolvers'
import { router } from './rest'
import { database } from '@app/database/index'
import { config } from '@app/config'
import log from '@app/utils/logger'
import { formatApolloServerError } from '@app/errors/formatter'

export class ApiClass {
  public koa: Koa
  public server: Server | null
  private readonly connections: Map<Socket, number>

  public constructor() {
    this.koa = new Koa()
    this.koa.use(koaCompress())
    this.koa.use(koaCors({ origin: '*' }))
    this.koa.use(koaBody())
    // koa-level error handler is still necessary for errors from middlewares at least
    this.koa.use(mdw.koaErrorHandler())
    this.koa.use(mdw.persistedQueries())
    this.koa.use(mdw.tagRequest())
    this.koa.use(mdw.authenticate())
    this.koa.use(router.routes())
    this.connections = new Map()
  }

  public static handleFatalError(err: Error): void {
    // Remove termination listeners
    process.removeAllListeners('uncaughtException')
    process.removeAllListeners('unhandledRejection')

    log.fatal({ err }, 'Fatal error occured. Exiting the app.')
  }

  public async start(): Promise<void> {
    // Handle unexpected termination
    process.once('uncaughtException', err => {
      log.error('Api crash: Uncaught exception')
      ApiClass.handleFatalError(err)
    })
    process.once('unhandledRejection', err => {
      log.error('Api crash: unhandledRejection')
      ApiClass.handleFatalError(err as Error)
    })

    // Handle expected termination
    process.once('SIGINT', () => this.stop())
    process.once('SIGTERM', () => this.stop())

    const port = config.api.port
    // todo: setup services bootstrap file
    await database.start()
    await this.setupGraphQlServer()

    await new Promise(done => {
      this.server = this.koa.listen(port, done)
    })
    // setup connection listener
    this.trackSockets()

    log.info(`App listening on ${port}`)
  }

  public async stop(): Promise<void> {
    log.info('App closing.')
    // Remove listeners
    process.removeAllListeners('SIGINT')
    process.removeAllListeners('SIGTERM')

    // ask to close remaining sockets
    this.forceCloseSockets()

    if (this.server && this.server.listening) {
      await new Promise(resolve => this.server.close(resolve))
    }
    await database.stop()
  }

  /**
   * Returns Apollo server with custom options
   */
  public async setupGraphQlServer(): Promise<void> {
    const schema = await this.buildExecutableSchema()
    const apollo = new ApolloServer({
      schema,
      context: ({ ctx }: { ctx: IKoaContext }) => ({
        koa: ctx,
        loaders: initLoaders(),
      }),
      debug: config.api.debugErrors,
      introspection: true,
      engine: false,
      formatError: (err: ApolloError) => {
        // log the full error first
        log.error({ err }, 'GraphQl error handled')
        return formatApolloServerError(err)
      },
      extensions: [() => new ErrorTrackExtension()],
      validationRules: [depthLimit(config.api.depthLimit)],
    })
    apollo.applyMiddleware({ app: this.koa })
  }

  /**
   * Build Type-graphql executable schema with custom options
   */
  private async buildExecutableSchema(): Promise<GraphQLSchema> {
    const schema = await buildSchema({
      resolvers: values(resolvers),
      emitSchemaFile: true,
      authChecker,
    })
    return schema
  }

  /**
   * Each created socket is stored so we can have control over it.
   */
  private trackSockets(): void {
    this.server.on('connection', socket => {
      // set/delete logic
      this.connections.set(socket, 0)
      socket.once('close', () => {
        this.connections.delete(socket)
      })
    })
  }

  /**
   * If there are pending connections, give them time to finish and then close.
   * unref -> if the timeout is the last thing to finish before exiting, ignore it
   */
  private forceCloseSockets(): void {
    if (this.connections.size > 0) {
      setTimeout(() => {
        this.connections.forEach((_, socket) => socket.end())
      }, 5000).unref()
    }
  }
}

export const api = new ApiClass()
