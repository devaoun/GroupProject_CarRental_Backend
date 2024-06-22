/*
  Warnings:

  - You are about to drop the column `paymentDeadline` on the `Bookings` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `Bookings` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(1))`.
  - You are about to drop the column `pricePerDay` on the `Cars` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethodId` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the column `slipImageUrl` on the `Payments` table. All the data in the column will be lost.
  - You are about to drop the `PaymentMethods` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerDay` to the `CarTypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentStatus` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Payments` DROP FOREIGN KEY `Payments_paymentMethodId_fkey`;

-- AlterTable
ALTER TABLE `Admins` ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `Bookings` DROP COLUMN `paymentDeadline`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `pickDropTime` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL,
    MODIFY `status` ENUM('confirmed', 'cancelled') NOT NULL DEFAULT 'confirmed';

-- AlterTable
ALTER TABLE `CarTypes` ADD COLUMN `pricePerDay` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Cars` DROP COLUMN `pricePerDay`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL;

-- AlterTable
ALTER TABLE `Customers` ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `Payments` DROP COLUMN `paymentMethodId`,
    DROP COLUMN `slipImageUrl`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `paymentStatus` VARCHAR(191) NOT NULL,
    ADD COLUMN `sessionId` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL;

-- DropTable
DROP TABLE `PaymentMethods`;
