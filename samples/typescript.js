// @ts-nocheck
import * as Koa from 'koa';
import * as koaCompress from 'koa-compress';
import * as koaBody from 'koa-bodyparser';
import * as koaCors from 'koa-cors';
import { values } from 'ramda';
import { ApolloServer } from 'apollo-server-koa';
import { buildSchema } from 'type-graphql';
import * as depthLimit from 'graphql-depth-limit';
import { authChecker } from './graphql/helpers/authorization';
import { ErrorTrackExtension } from './graphql/helpers/error-track-ext';
import * as mdw from './middleware';
import { initLoaders } from './graphql/loaders';
import * as resolvers from './graphql/resolvers';
import { router } from './rest';
import { database } from '@app/database/index';
import { config } from '@app/config';
import log from '@app/utils/logger';
import { formatApolloServerError } from '@app/errors/formatter';
export class ApiClass {
    koa;
    server;
    connections;
    constructor() {
        this.koa = new Koa();
        this.koa.use(koaCompress());
        this.koa.use(koaCors({ origin: '*' }));
        this.koa.use(koaBody());
        // koa-level error handler is still necessary for errors from middlewares at least
        this.koa.use(mdw.koaErrorHandler());
        this.koa.use(mdw.persistedQueries());
        this.koa.use(mdw.tagRequest());
        this.koa.use(mdw.authenticate());
        this.koa.use(router.routes());
        this.connections = new Map();
    }
    static handleFatalError(err) {
        // Remove termination listeners
        process.removeAllListeners('uncaughtException');
        process.removeAllListeners('unhandledRejection');
        log.fatal({ err }, 'Fatal error occured. Exiting the app.');
    }
    async start() {
        // Handle unexpected termination
        process.once('uncaughtException', err => {
            log.error('Api crash: Uncaught exception');
            ApiClass.handleFatalError(err);
        });
        process.once('unhandledRejection', err => {
            log.error('Api crash: unhandledRejection');
            ApiClass.handleFatalError(err);
        });
        // Handle expected termination
        process.once('SIGINT', () => this.stop());
        process.once('SIGTERM', () => this.stop());
        const port = config.api.port;
        // todo: setup services bootstrap file
        await database.start();
        await this.setupGraphQlServer();
        await new Promise(done => {
            this.server = this.koa.listen(port, done);
        });
        // setup connection listener
        this.trackSockets();
        log.info(`App listening on ${port}`);
    }
    async stop() {
        log.info('App closing.');
        // Remove listeners
        process.removeAllListeners('SIGINT');
        process.removeAllListeners('SIGTERM');
        // ask to close remaining sockets
        this.forceCloseSockets();
        if (this.server && this.server.listening) {
            await new Promise(resolve => this.server.close(resolve));
        }
        await database.stop();
    }
    /**
     * Returns Apollo server with custom options
     */
    async setupGraphQlServer() {
        const schema = await this.buildExecutableSchema();
        const apollo = new ApolloServer({
            schema,
            context: ({ ctx }) => ({
                koa: ctx,
                loaders: initLoaders(),
            }),
            debug: config.api.debugErrors,
            introspection: true,
            engine: false,
            formatError: (err) => {
                // log the full error first
                log.error({ err }, 'GraphQl error handled');
                return formatApolloServerError(err);
            },
            extensions: [() => new ErrorTrackExtension()],
            validationRules: [depthLimit(config.api.depthLimit)],
        });
        apollo.applyMiddleware({ app: this.koa });
    }
    /**
     * Build Type-graphql executable schema with custom options
     */
    async buildExecutableSchema() {
        const schema = await buildSchema({
            resolvers: values(resolvers),
            emitSchemaFile: true,
            authChecker,
        });
        return schema;
    }
    /**
     * Each created socket is stored so we can have control over it.
     */
    trackSockets() {
        this.server.on('connection', socket => {
            // set/delete logic
            this.connections.set(socket, 0);
            socket.once('close', () => {
                this.connections.delete(socket);
            });
        });
    }
    /**
     * If there are pending connections, give them time to finish and then close.
     * unref -> if the timeout is the last thing to finish before exiting, ignore it
     */
    forceCloseSockets() {
        if (this.connections.size > 0) {
            setTimeout(() => {
                this.connections.forEach((_, socket) => socket.end());
            }, 5000).unref();
        }
    }
}
export const api = new ApiClass();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGVzY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUlkLE9BQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFBO0FBQzFCLE9BQU8sS0FBSyxXQUFXLE1BQU0sY0FBYyxDQUFBO0FBQzNDLE9BQU8sS0FBSyxPQUFPLE1BQU0sZ0JBQWdCLENBQUE7QUFDekMsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLENBQUE7QUFDbkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUU5QixPQUFPLEVBQUUsWUFBWSxFQUFlLE1BQU0sbUJBQW1CLENBQUE7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQUMxQyxPQUFPLEtBQUssVUFBVSxNQUFNLHFCQUFxQixDQUFBO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTtBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUN2RSxPQUFPLEtBQUssR0FBRyxNQUFNLGNBQWMsQ0FBQTtBQUNuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDL0MsT0FBTyxLQUFLLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFBO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFBO0FBQ3BDLE9BQU8sR0FBRyxNQUFNLG1CQUFtQixDQUFBO0FBQ25DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBRS9ELE1BQU0sT0FBTyxRQUFRO0lBQ1osR0FBRyxDQUFLO0lBQ1IsTUFBTSxDQUFlO0lBQ1gsV0FBVyxDQUFxQjtJQUVq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