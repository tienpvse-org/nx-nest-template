import { Query, Resolver } from '@nestjs/graphql';
import { Auth } from './entities/auth.entity';

@Resolver(() => Auth)
export class AuthResolver {
  @Query(() => String)
  placeholder() {
    return '';
  }
}
