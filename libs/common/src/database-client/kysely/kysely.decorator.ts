import { Inject } from '@nestjs/common';
import { INJECT_KYSELY_KEY } from './constant';

export const InjectKysely = Inject(INJECT_KYSELY_KEY);
