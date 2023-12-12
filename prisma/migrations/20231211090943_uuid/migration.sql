/*
  Warnings:

  - The primary key for the `pizza` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pizza_topping` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `topping` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_PizzaToTopping" DROP CONSTRAINT "_PizzaToTopping_A_fkey";

-- DropForeignKey
ALTER TABLE "_PizzaToTopping" DROP CONSTRAINT "_PizzaToTopping_B_fkey";

-- AlterTable
ALTER TABLE "_PizzaToTopping" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "pizza" DROP CONSTRAINT "pizza_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "pizza_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "pizza_id_seq";

-- AlterTable
ALTER TABLE "pizza_topping" DROP CONSTRAINT "pizza_topping_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "pizza_topping_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "pizza_topping_id_seq";

-- AlterTable
ALTER TABLE "topping" DROP CONSTRAINT "topping_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "topping_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "topping_id_seq";

-- AddForeignKey
ALTER TABLE "_PizzaToTopping" ADD CONSTRAINT "_PizzaToTopping_A_fkey" FOREIGN KEY ("A") REFERENCES "pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PizzaToTopping" ADD CONSTRAINT "_PizzaToTopping_B_fkey" FOREIGN KEY ("B") REFERENCES "topping"("id") ON DELETE CASCADE ON UPDATE CASCADE;
