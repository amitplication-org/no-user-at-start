import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WithIdNotNamedIdServiceBase } from "./base/withIdNotNamedId.service.base";

@Injectable()
export class WithIdNotNamedIdService extends WithIdNotNamedIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
