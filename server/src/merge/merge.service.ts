import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MergeServiceBase } from "./base/merge.service.base";

@Injectable()
export class MergeService extends MergeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
