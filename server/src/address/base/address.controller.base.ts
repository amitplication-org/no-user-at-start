/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AddressService } from "../address.service";
import { AddressCreateInput } from "./AddressCreateInput";
import { AddressWhereInput } from "./AddressWhereInput";
import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { AddressFindManyArgs } from "./AddressFindManyArgs";
import { AddressUpdateInput } from "./AddressUpdateInput";
import { Address } from "./Address";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

export class AddressControllerBase {
  constructor(protected readonly service: AddressService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Address })
  async create(@common.Body() data: AddressCreateInput): Promise<Address> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        address_1: true,
        address_2: true,
        city: true,
        state: true,
        zip: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Address] })
  @ApiNestedQuery(AddressFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Address[]> {
    const args = plainToClass(AddressFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        address_1: true,
        address_2: true,
        city: true,
        state: true,
        zip: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        address_1: true,
        address_2: true,
        city: true,
        state: true,
        zip: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() data: AddressUpdateInput
  ): Promise<Address | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          address_1: true,
          address_2: true,
          city: true,
          state: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          address_1: true,
          address_2: true,
          city: true,
          state: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/customers")
  @ApiNestedQuery(CustomerFindManyArgs)
  async findManyCustomers(
    @common.Req() request: Request,
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Customer[]> {
    const query = plainToClass(CustomerFindManyArgs, request.query);
    const results = await this.service.findCustomers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,

        address: {
          select: {
            id: true,
          },
        },

        customerType: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customers")
  async connectCustomers(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customers")
  async updateCustomers(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customers")
  async disconnectCustomers(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
