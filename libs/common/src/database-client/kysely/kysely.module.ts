import { DynamicModule, Module } from '@nestjs/common';
import { Kysely, PostgresDialect } from 'kysely';
import { Pool, PoolConfig } from 'pg';
import { INJECT_KYSELY_KEY } from './constant';
@Module({})
export class KyselyModule {
  static forRoot(config?: PoolConfig): DynamicModule {
    const pool = new Pool(config);
    const dialect = new PostgresDialect({ pool });
    const client = new Kysely({ dialect });
    return {
      module: KyselyModule,
      providers: [{ provide: INJECT_KYSELY_KEY, useValue: client }],
      global: true,
    };
  }
}
