import type { Type } from '../../../type.ts';

export interface Version {
  id : string,
  type : Type,
  url : string,
  time : string,
  releaseTime : string,
  sha1 : string,
  compienceLevel : number
}
