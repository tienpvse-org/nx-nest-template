import { Injectable } from '@nestjs/common';
import { InjectKysely } from '@tienpvse/common';
import { DB } from '../../db';
import { Kysely } from 'kysely';

@Injectable()
export class AuthService {
  constructor(@InjectKysely private readonly kysely: Kysely<DB>) {}

  async register() {
    const createdUser = await this.kysely
      .insertInto('user')
      .values({})
      .returningAll()
      .executeTakeFirst();
    return createdUser;
  }
}
