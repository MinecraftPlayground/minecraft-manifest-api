// deno-lint-ignore-file camelcase
import type { Type } from '../../type.ts';

export interface Package {
  arguments : {
    game : (string | {
      rules : {
        action : string,
        features : {
          [key : string] : boolean
        }
      }[],
      value : (string | string[])
    })[],
    jvm : (string | {
      rules : {
        action : string,
        os : {
          [key : string] : boolean
        }
      }[],
      value : (string | string[])
    })[]
  },
  assetIndex : {
    id : string,
    sha1 : string,
    size : number,
    totalSize : number,
    url : string
  },
  assets : string,
  complianceLevel : number,
  downloads : {
    client : {
      sha1 : string,
      size : number,
      url : string
    },
    client_mappings : {
      sha1 : string,
      size : number,
      url : string
    },
    server : {
      sha1 : string,
      size : number,
      url : string
    },
    server_mappings : {
      sha1 : string,
      size : number,
      url : string
    }
  },
  id : string,
  javaVersion : {
    component : string,
    majorVersion : number
  },
  libraries : {
    downloads : {
      artifact : {
        path : string,
        sha1 : string,
        size : number,
        url : string
      }
    },
    name : string,
    rules : {
      action : string,
      os : {
        [key : string] : boolean
      }
    }[]
  }[],
  logging : {
    client : {
      argument : string,
      file : {
        id : string,
        sha1 : string,
        size : number,
        url : string
      }
    }
  },
  mainClass : string,
  minimumLauncherVersion : number,
  releaseTime : string,
  time : string,
  type : Type
}
