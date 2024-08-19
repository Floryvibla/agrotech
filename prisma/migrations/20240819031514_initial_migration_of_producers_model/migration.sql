-- CreateTable
CREATE TABLE "Producer" (
    "id" SERIAL NOT NULL,
    "cpfOrCnpj" TEXT NOT NULL,
    "producerName" TEXT NOT NULL,
    "farmName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "totalAreaFarm" DOUBLE PRECISION NOT NULL,
    "vegetationArea" DOUBLE PRECISION NOT NULL,
    "cropsPlanted" TEXT[],

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Producer_cpfOrCnpj_key" ON "Producer"("cpfOrCnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_slug_key" ON "Producer"("slug");
