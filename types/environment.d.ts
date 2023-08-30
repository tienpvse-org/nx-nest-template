export {};

declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      NEST_APP_VERSION: string;
    }
  }
}
