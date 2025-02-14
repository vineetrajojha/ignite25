/*
  Warnings:

  - You are about to drop the column `contact` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `university` on the `Member` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "contact",
DROP COLUMN "email",
DROP COLUMN "university";
