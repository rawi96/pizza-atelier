// prisma/seed.ts

import { Pizza, PizzaTopping, PrismaClient, Topping } from "@prisma/client";
import { createId } from "@paralleldrive/cuid2";

const prisma = new PrismaClient();

async function main() {
  await prisma.pizzaTopping.deleteMany({});
  await prisma.pizza.deleteMany({});
  await prisma.topping.deleteMany({});

  const toppings = [
    { name: "Eckige chääs", id: createId() },
    { name: "Runde chääs", id: createId() },
    { name: "Getrocknete Bananen", id: createId() },
    { name: "GGGGurke", id: createId() },
    { name: "🤮 Ananas 🤮", id: createId() },
    { name: "Broccoli", id: createId() },
    { name: "Macadaaamiaaa", id: createId() },
    { name: "Pekanus", id: createId() },
    { name: "Aubergine 🍆", id: createId() },
    { name: "Pfirsirch 🍑", id: createId() },
    { name: "Schinkää", id: createId() },
    { name: "Nüüt", id: createId() },
  ];

  const pizzas = [
    { name: "Nüsse sind gesund", id: createId() },
    { name: "Chäääs isch läääs", id: createId() },
    { name: "Hulk", id: createId() },
  ];

  const pizzaToppings = [
    { pizzaId: pizzas[0].id, toppingId: toppings[6].id, id: createId() },
    { pizzaId: pizzas[0].id, toppingId: toppings[7].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[0].id, id: createId() },
    { pizzaId: pizzas[1].id, toppingId: toppings[1].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[3].id, id: createId() },
    { pizzaId: pizzas[2].id, toppingId: toppings[5].id, id: createId() },
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
