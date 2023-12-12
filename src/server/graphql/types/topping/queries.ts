import { builder } from "../../builder";
import { prisma } from "../../prisma/prisma";

builder.queryField("toppings", (builder) =>
  builder.prismaField({
    type: ["Topping"],
    resolve: async (query) => await prisma.topping.findMany({ ...query }),
  })
);
