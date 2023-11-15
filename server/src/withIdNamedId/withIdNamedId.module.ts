import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WithIdNamedIdModuleBase } from "./base/withIdNamedId.module.base";
import { WithIdNamedIdService } from "./withIdNamedId.service";
import { WithIdNamedIdController } from "./withIdNamedId.controller";
import { WithIdNamedIdResolver } from "./withIdNamedId.resolver";

@Module({
  imports: [WithIdNamedIdModuleBase, forwardRef(() => AuthModule)],
  controllers: [WithIdNamedIdController],
  providers: [WithIdNamedIdService, WithIdNamedIdResolver],
  exports: [WithIdNamedIdService],
})
export class WithIdNamedIdModule {}
