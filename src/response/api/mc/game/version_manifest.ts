import type { Latest } from './latest.ts';
import type { Version } from './version/version.ts';

export interface VersionManifest {
  latest : Latest,
  versions : Version[]
}
