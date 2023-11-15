import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WithIdNamedIdServiceBase } from "./base/withIdNamedId.service.base";

@Injectable()
export class WithIdNamedIdService extends WithIdNamedIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
