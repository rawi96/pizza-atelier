-- CreateTable
CREATE TABLE "pizza" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "pizza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topping" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "topping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pizza_topping" (
    "id" SERIAL NOT NULL,
    "pizzaId" INTEGER NOT NULL,
    "toppingId" INTEGER NOT NULL,

    CONSTRAINT "pizza_topping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PizzaToTopping" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PizzaToTopping_AB_unique" ON "_PizzaToTopping"("A", "B");

-- CreateIndex
CREATE INDEX "_PizzaToTopping_B_index" ON "_PizzaToTopping"("B");

-- AddForeignKey
ALTER TABLE "_PizzaToTopping" ADD CONSTRAINT "_PizzaToTopping_A_fkey" FOREIGN KEY ("A") REFERENCES "pizza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PizzaToTopping" ADD CONSTRAINT "_PizzaToTopping_B_fkey" FOREIGN KEY ("B") REFERENCES "topping"("id") ON DELETE CASCADE ON UPDATE CASCADE;
