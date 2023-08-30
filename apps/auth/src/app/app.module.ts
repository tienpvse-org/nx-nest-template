import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { KyselyModule } from '@tienpvse/common';
import 'dotenv/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    KyselyModule.forRoot({
      database: process.env.AUTH_POSTGRES_DB,
      host: process.env.AUTH_POSTGRES_HOST,
      user: process.env.AUTH_POSTGRES_USER,
      password: process.env.AUTH_POSTGRES_PASSWORD,
      max: 10,
    }),
    AuthModule,
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: true,
      graphiql: { credentials: 'include' },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
