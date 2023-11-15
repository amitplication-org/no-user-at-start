import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WithIdNotNamedIdService } from "./withIdNotNamedId.service";
import { WithIdNotNamedIdControllerBase } from "./base/withIdNotNamedId.controller.base";

@swagger.ApiTags("withIdNotNamedIds")
@common.Controller("withIdNotNamedIds")
export class WithIdNotNamedIdController extends WithIdNotNamedIdControllerBase {
  constructor(
    protected readonly service: WithIdNotNamedIdService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
