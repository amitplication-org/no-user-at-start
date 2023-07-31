-- CreateEnum
CREATE TYPE "EnumCustomerCustomerType" AS ENUM ('Small', 'Big', 'Medium');

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "customerType" "EnumCustomerCustomerType";
