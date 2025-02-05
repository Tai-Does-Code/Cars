-- CreateTable
CREATE TABLE "CarMake" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CarMake_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarModel" (
    "id" TEXT NOT NULL,
    "makeId" TEXT NOT NULL,
    "modelName" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "fuelType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,

    CONSTRAINT "CarModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarMake_name_key" ON "CarMake"("name");

-- AddForeignKey
ALTER TABLE "CarModel" ADD CONSTRAINT "CarModel_makeId_fkey" FOREIGN KEY ("makeId") REFERENCES "CarMake"("id") ON DELETE CASCADE ON UPDATE CASCADE;
