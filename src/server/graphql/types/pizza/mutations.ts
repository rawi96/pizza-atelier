import { builder } from "../../builder";
import { prisma } from "../../prisma/prisma";
import { addPizzaArgs } from "./args";

builder.mutationField("addPizza", (builder) =>
  builder.prismaField({
    type: "Pizza",
    args: {
      data: builder.arg({ type: addPizzaArgs, required: true }),
    },
    resolve: async (_query, _root, { data }) =>
      await prisma.pizza.create({
        data: {
          name: data.name,
          pizzaTopping: {
            createMany: {
              data: [
                ...data.toppingIds.map((topping) => ({
                  toppingId: topping,
                })),
              ],
            },
          },
        },
      }),
  })
);
