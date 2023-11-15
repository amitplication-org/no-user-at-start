import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WithIdNotNamedIdModuleBase } from "./base/withIdNotNamedId.module.base";
import { WithIdNotNamedIdService } from "./withIdNotNamedId.service";
import { WithIdNotNamedIdController } from "./withIdNotNamedId.controller";
import { WithIdNotNamedIdResolver } from "./withIdNotNamedId.resolver";

@Module({
  imports: [WithIdNotNamedIdModuleBase, forwardRef(() => AuthModule)],
  controllers: [WithIdNotNamedIdController],
  providers: [WithIdNotNamedIdService, WithIdNotNamedIdResolver],
  exports: [WithIdNotNamedIdService],
})
export class WithIdNotNamedIdModule {}
