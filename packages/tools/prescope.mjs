/**
 * Apply all given scope prefixes onto all given scopes
 *
 * This is useful when working with language-specific TextMate grammars when you want to only
 * override a token's colour for that particular language. Instead of manually adding the
 * language-specific scope to each and every scope declaration, you can simply .bind() this function
 * with the intended `prefixes` and then simply pass the actual scopes to this bound function. It
 * will then generate all the scopes with the scope prefix applied.
 *
 * @param   {String[]}    prefixes  Array of scope prefixes to apply to all given scopes
 * @param   {String[]}    scopes    The scopes to apply prefixes on to
 * @return  {String[]}              All scopes expanded with all prefixes applied
 */
function prescope(prefixes = [], scopes = []) {
  const result = []

  for (const prefix of prefixes) {
    for (const scope of scopes) {
      result.push(`${prefix} ${scope}`)
    }
  }

  return result
}

export {
  prescope,
}
