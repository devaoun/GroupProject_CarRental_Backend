/*
  Warnings:

  - Made the column `phone` on table `Customers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `driverLicense` on table `Customers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Customers` MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NOT NULL,
    MODIFY `driverLicense` VARCHAR(191) NOT NULL;
