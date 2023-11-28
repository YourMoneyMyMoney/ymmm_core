-- AlterTable
ALTER TABLE "User" ADD COLUMN     "platform" TEXT;

UPDATE "User" SET "platform" = 'ymmm' WHERE "platform" IS NULL;