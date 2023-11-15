/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateMergeArgs } from "./CreateMergeArgs";
import { UpdateMergeArgs } from "./UpdateMergeArgs";
import { DeleteMergeArgs } from "./DeleteMergeArgs";
import { MergeCountArgs } from "./MergeCountArgs";
import { MergeFindManyArgs } from "./MergeFindManyArgs";
import { MergeFindUniqueArgs } from "./MergeFindUniqueArgs";
import { Merge } from "./Merge";
import { MergeService } from "../merge.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Merge)
export class MergeResolverBase {
  constructor(
    protected readonly service: MergeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Merge",
    action: "read",
    possession: "any",
  })
  async _mergesMeta(
    @graphql.Args() args: MergeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Merge])
  @nestAccessControl.UseRoles({
    resource: "Merge",
    action: "read",
    possession: "any",
  })
  async merges(@graphql.Args() args: MergeFindManyArgs): Promise<Merge[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Merge, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Merge",
    action: "read",
    possession: "own",
  })
  async merge(
    @graphql.Args() args: MergeFindUniqueArgs
  ): Promise<Merge | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Merge)
  @nestAccessControl.UseRoles({
    resource: "Merge",
    action: "create",
    possession: "any",
  })
  async createMerge(@graphql.Args() args: CreateMergeArgs): Promise<Merge> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Merge)
  @nestAccessControl.UseRoles({
    resource: "Merge",
    action: "update",
    possession: "any",
  })
  async updateMerge(
    @graphql.Args() args: UpdateMergeArgs
  ): Promise<Merge | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Merge)
  @nestAccessControl.UseRoles({
    resource: "Merge",
    action: "delete",
    possession: "any",
  })
  async deleteMerge(
    @graphql.Args() args: DeleteMergeArgs
  ): Promise<Merge | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
