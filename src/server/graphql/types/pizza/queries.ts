import { builder } from "../../builder";
import { prisma } from "../../prisma/prisma";

builder.queryField("pizzas", (builder) =>
  builder.prismaField({
    type: ["Pizza"],
    resolve: async (query) => await prisma.pizza.findMany({ ...query }),
  })
);
