/*
  Warnings:

  - You are about to drop the column `make` on the `RentalForm` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `RentalForm` table. All the data in the column will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RentalForm" DROP CONSTRAINT "RentalForm_carId_fkey";

-- AlterTable
ALTER TABLE "RentalForm" DROP COLUMN "make",
DROP COLUMN "model",
ALTER COLUMN "carId" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Car";

-- AddForeignKey
ALTER TABLE "RentalForm" ADD CONSTRAINT "RentalForm_carId_fkey" FOREIGN KEY ("carId") REFERENCES "CarModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
