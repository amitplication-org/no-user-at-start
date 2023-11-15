import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MergeModuleBase } from "./base/merge.module.base";
import { MergeService } from "./merge.service";
import { MergeController } from "./merge.controller";
import { MergeResolver } from "./merge.resolver";

@Module({
  imports: [MergeModuleBase, forwardRef(() => AuthModule)],
  controllers: [MergeController],
  providers: [MergeService, MergeResolver],
  exports: [MergeService],
})
export class MergeModule {}
