export {};

declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      NEST_APP_VERSION: string;
      AUTH_POSTGRES_PASSWORD: string;
      AUTH_POSTGRES_USER: string;
      AUTH_POSTGRES_DB: string;
      AUTH_POSTGRES_HOST: string;
      AUTH_POSTGRES_EXPOSED_PORT: string;
    }
  }
}
