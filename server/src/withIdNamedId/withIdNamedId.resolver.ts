import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WithIdNamedIdResolverBase } from "./base/withIdNamedId.resolver.base";
import { WithIdNamedId } from "./base/WithIdNamedId";
import { WithIdNamedIdService } from "./withIdNamedId.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WithIdNamedId)
export class WithIdNamedIdResolver extends WithIdNamedIdResolverBase {
  constructor(
    protected readonly service: WithIdNamedIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
