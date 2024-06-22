/*
  Warnings:

  - You are about to drop the column `seatNumber` on the `Cars` table. All the data in the column will be lost.
  - You are about to drop the column `use_date` on the `Cars` table. All the data in the column will be lost.
  - Added the required column `useDate` to the `Cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cars` DROP COLUMN `seatNumber`,
    DROP COLUMN `use_date`,
    ADD COLUMN `useDate` VARCHAR(191) NOT NULL;
