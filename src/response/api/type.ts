export type Type = 
  | 'old_alpha'
  | 'old_beta'
  | 'release'
  | 'snapshot'
  // deno-lint-ignore ban-types
  | (string & {})
