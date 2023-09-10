-- CreateTable
CREATE TABLE "lessons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lessons_id_key" ON "lessons"("id");
