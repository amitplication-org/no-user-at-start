import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WithIdNotNamedIdResolverBase } from "./base/withIdNotNamedId.resolver.base";
import { WithIdNotNamedId } from "./base/WithIdNotNamedId";
import { WithIdNotNamedIdService } from "./withIdNotNamedId.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WithIdNotNamedId)
export class WithIdNotNamedIdResolver extends WithIdNotNamedIdResolverBase {
  constructor(
    protected readonly service: WithIdNotNamedIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
