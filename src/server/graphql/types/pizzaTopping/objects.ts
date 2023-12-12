import { builder } from "../../builder";

builder.prismaObject("PizzaTopping", {
  fields: (builder) => ({
    id: builder.exposeID("id"),
    pizza: builder.relation("pizza"),
    topping: builder.relation("topping"),
  }),
});
