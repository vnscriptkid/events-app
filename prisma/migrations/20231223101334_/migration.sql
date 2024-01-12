/*
  Warnings:

  - You are about to drop the column `email` on the `Registration` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Registration` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,event_id]` on the table `Registration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Registration_user_id_event_id_key" ON "Registration"("user_id", "event_id");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
