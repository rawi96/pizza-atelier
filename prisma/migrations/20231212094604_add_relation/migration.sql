-- AddForeignKey
ALTER TABLE "pizza_topping" ADD CONSTRAINT "pizza_topping_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "pizza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pizza_topping" ADD CONSTRAINT "pizza_topping_toppingId_fkey" FOREIGN KEY ("toppingId") REFERENCES "topping"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
