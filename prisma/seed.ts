// prisma/seed.ts

import { Pizza, PizzaTopping, PrismaClient, Topping } from "@prisma/client";
import { createId } from "@paralleldrive/cuid2";

const prisma = new PrismaClient();

async function main() {
  await prisma.pizzaTopping.deleteMany({});
  await prisma.pizza.deleteMany({});
  await prisma.topping.deleteMany({});

  const toppings: Topping[] = [
    { name: "Pepperoni", id: createId() },
    { name: "Sausage", id: createId() },
    { name: "Mushrooms", id: createId() },
    { name: "Onions", id: createId() },
    { name: "Bacon", id: createId() },
    { name: "Extra cheese", id: createId() },
    { name: "Black olives", id: createId() },
    { name: "Green peppers", id: createId() },
    { name: "Pineapple", id: createId() },
    { name: "Spinach", id: createId() },
  ];

  const pizzas: Pizza[] = [
    { name: "Cheese", id: createId() },
    { name: "Pepperoni", id: createId() },
    { name: "Veggie", id: createId() },
    { name: "Meat Lovers", id: createId() },
  ];

  const pizzaToppings: PizzaTopping[] = [
    { pizzaId: pizzas[0].id, toppingId: toppings[5].id, id: createId() },
    { pizzaId: pizzas[0].id, toppingId: toppings[6].id, id: createId() },
    { pizzaId: pizzas[0].id, toppingId: toppings[7].id, id: createId() },
    { pizzaId: pizzas[0].id, toppingId: toppings[8].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[0].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[1].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[2].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[3].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[4].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[5].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[6].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[7].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[8].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[2].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[3].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[4].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[5].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[6].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[7].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[8].id, id: createId() },
    { pizzaId: pizzas[3].id, toppingId: toppings[0].id, id: createId() },
    { pizzaId: pizzas[3].id, toppingId: toppings[1].id, id: createId() },
    { pizzaId: pizzas[3].id, toppingId: toppings[2].id, id: createId() },
    { pizzaId: pizzas[3].id, toppingId: toppings[3].id, id: createId() },
    { pizzaId: pizzas[3].id, toppingId: toppings[4].id, id: createId() },
  ];

  await prisma.topping.createMany({
    data: toppings,
  });

  await prisma.pizza.createMany({
    data: pizzas,
  });

  await prisma.pizzaTopping.createMany({
    data: pizzaToppings,
  });
}

main().then(() => {
  console.log("Data seeded...");
});
