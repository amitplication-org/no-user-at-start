import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WithIdNamedIdService } from "./withIdNamedId.service";
import { WithIdNamedIdControllerBase } from "./base/withIdNamedId.controller.base";

@swagger.ApiTags("withIdNamedIds")
@common.Controller("withIdNamedIds")
export class WithIdNamedIdController extends WithIdNamedIdControllerBase {
  constructor(
    protected readonly service: WithIdNamedIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
