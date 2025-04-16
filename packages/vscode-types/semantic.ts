import type * as Color from 'color'

enum SemanticTokenType {
/** For identifiers that declare or reference a namespace, module, or package. */
  NAMESPACE = 'namespace',
  /** For identifiers that declare or reference a class type. */
  CLASS = 'class',
  /** For identifiers that declare or reference an enumeration type. */
  ENUM = 'enum',
  /** For identifiers that declare or reference an interface type. */
  INTERFACE = 'interface',
  /** For identifiers that declare or reference a struct type. */
  STRUCT = 'struct',
  /** For identifiers that declare or reference a type parameter. */
  TYPEPARAMETER = 'typeParameter',
  /** For identifiers that declare or reference a type that is not covered above. */
  TYPE = 'type',
  /** For identifiers that declare or reference a function or method parameters. */
  PARAMETER = 'parameter',
  /** For identifiers that declare or reference a local or global variable. */
  VARIABLE = 'variable',
  /** For identifiers that declare or reference a member property, member field, or member variable. */
  PROPERTY = 'property',
  /** For identifiers that declare or reference an enumeration property, constant, or member. */
  ENUMMEMBER = 'enumMember',
  /** For identifiers that declare or reference decorators and annotations. */
  DECORATOR = 'decorator',
  /** For identifiers that declare an event property. */
  EVENT = 'event',
  /** For identifiers that declare a function. */
  FUNCTION = 'function',
  /** For identifiers that declare a member function or method. */
  METHOD = 'method',
  /** For identifiers that declare a macro. */
  MACRO = 'macro',
  /** For identifiers that declare a label. */
  LABEL = 'label',
  /** For tokens that represent a comment. */
  COMMENT = 'comment',
  /** For tokens that represent a string literal. */
  STRING = 'string',
  /** For tokens that represent a language keyword. */
  KEYWORD = 'keyword',
  /** For tokens that represent a number literal. */
  NUMBER = 'number',
  /** For tokens that represent a regular expression literal. */
  REGEXP = 'regexp',
  /** For tokens that represent an operator. */
  OPERATOR = 'operator',
  /** For any token. Use in conjunction with a token modifier. */
  ANY = '*',
}

enum SemanticTokenModifier {
  /** For declarations of symbols. */
  DECLARATION = 'declaration',
  /** For definitions of symbols, for example, in header files. */
  DEFINITION = 'definition',
  /** For readonly variables and member fields (constants). */
  READONLY = 'readonly',
  /** For class members (static members). */
  STATIC = 'static',
  /** For symbols that should no longer be used.  */
  DEPRECATED = 'deprecated',
  /** For types and member functions that are abstract. */
  ABSTRACT = 'abstract',
  /** For functions that are marked async.  */
  ASYNC = 'async',
  /** For variable references where the variable is assigned to.  */
  MODIFICATION = 'modification',
  /** For occurrences of symbols in documentation.  */
  DOCUMENTATION = 'documentation',
  /** For symbols that are part of the standard library. */
  DEFAULTLIBRARY = 'defaultLibrary',
}

/** A language identifier. For example, `javascript` or `typescript`. */
type SemanticTokenLanguage = string

/** A fully qualified semantic token identifier. Consists of the type, modifier, and language. */
type SemanticToken = string

interface SemanticRules {
  [token: SemanticToken]: SemanticRule
}

interface SemanticRule {
  foreground: Color
  bold: boolean
  italic: boolean
  underline: boolean
}

interface TokenParams {
  type: SemanticTokenType
  modifier?: SemanticTokenModifier
  lang?: SemanticTokenLanguage
}

function mktoken(params: TokenParams): SemanticToken {
  return [
    params.type,
    params.modifier ? `.${params.modifier}` : '',
    params.lang ? `:${params.lang}` : '',
  ].join('')
}

export {
  SemanticTokenType,
  SemanticTokenModifier,
  SemanticTokenLanguage,
  SemanticToken,
  SemanticRules,
  SemanticRule,
  mktoken,
}
