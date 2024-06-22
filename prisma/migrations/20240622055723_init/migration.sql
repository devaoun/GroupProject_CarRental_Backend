-- CreateTable
CREATE TABLE `Admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(15) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Admins_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customers` (
    `customerId` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(15) NOT NULL,
    `phone` VARCHAR(15) NULL,
    `address` VARCHAR(191) NULL,
    `driverLicense` VARCHAR(191) NULL,
    `totalPoints` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Customers_email_key`(`email`),
    UNIQUE INDEX `Customers_driverLicense_key`(`driverLicense`),
    PRIMARY KEY (`customerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branches` (
    `branchId` INTEGER NOT NULL AUTO_INCREMENT,
    `branchName` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,

    PRIMARY KEY (`branchId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarTypes` (
    `carTypeId` INTEGER NOT NULL AUTO_INCREMENT,
    `carTypeName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`carTypeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarModels` (
    `carModelId` INTEGER NOT NULL AUTO_INCREMENT,
    `carTypeId` INTEGER NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `transmission` VARCHAR(191) NOT NULL,
    `fuel` VARCHAR(191) NOT NULL,
    `seats` INTEGER NOT NULL,

    PRIMARY KEY (`carModelId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CarImages` (
    `imageId` INTEGER NOT NULL AUTO_INCREMENT,
    `carModelId` INTEGER NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`imageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cars` (
    `carId` INTEGER NOT NULL AUTO_INCREMENT,
    `carModelId` INTEGER NOT NULL,
    `licensePlate` VARCHAR(191) NOT NULL,
    `status` ENUM('available', 'rented', 'maintenance') NOT NULL DEFAULT 'available',
    `pricePerDay` DOUBLE NOT NULL,
    `branchId` INTEGER NULL,
    `seatNumber` INTEGER NOT NULL,
    `use_date` DATETIME(3) NULL,

    UNIQUE INDEX `Cars_licensePlate_key`(`licensePlate`),
    PRIMARY KEY (`carId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bookings` (
    `bookingId` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `carId` INTEGER NOT NULL,
    `bookingDate` DATETIME(3) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `totalAmount` DOUBLE NOT NULL,
    `pickupLocationId` INTEGER NOT NULL,
    `dropoffLocationId` INTEGER NOT NULL,
    `status` ENUM('pending', 'confirmed', 'cancelled') NOT NULL DEFAULT 'pending',
    `paymentDeadline` DATETIME(3) NULL,

    PRIMARY KEY (`bookingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentMethods` (
    `paymentMethodId` INTEGER NOT NULL AUTO_INCREMENT,
    `methodName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`paymentMethodId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payments` (
    `paymentId` INTEGER NOT NULL AUTO_INCREMENT,
    `bookingId` INTEGER NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `paymentMethodId` INTEGER NOT NULL,
    `slipImageUrl` VARCHAR(191) NULL,

    UNIQUE INDEX `Payments_bookingId_key`(`bookingId`),
    PRIMARY KEY (`paymentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CarModels` ADD CONSTRAINT `CarModels_carTypeId_fkey` FOREIGN KEY (`carTypeId`) REFERENCES `CarTypes`(`carTypeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CarImages` ADD CONSTRAINT `CarImages_carModelId_fkey` FOREIGN KEY (`carModelId`) REFERENCES `CarModels`(`carModelId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cars` ADD CONSTRAINT `Cars_carModelId_fkey` FOREIGN KEY (`carModelId`) REFERENCES `CarModels`(`carModelId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cars` ADD CONSTRAINT `Cars_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branches`(`branchId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookings` ADD CONSTRAINT `Bookings_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `Customers`(`customerId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookings` ADD CONSTRAINT `Bookings_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Cars`(`carId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookings` ADD CONSTRAINT `Bookings_pickupLocationId_fkey` FOREIGN KEY (`pickupLocationId`) REFERENCES `Branches`(`branchId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookings` ADD CONSTRAINT `Bookings_dropoffLocationId_fkey` FOREIGN KEY (`dropoffLocationId`) REFERENCES `Branches`(`branchId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Bookings`(`bookingId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payments` ADD CONSTRAINT `Payments_paymentMethodId_fkey` FOREIGN KEY (`paymentMethodId`) REFERENCES `PaymentMethods`(`paymentMethodId`) ON DELETE RESTRICT ON UPDATE CASCADE;
