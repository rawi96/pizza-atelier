import { builder } from "../../builder";

builder.prismaObject("Pizza", {
  fields: (builder) => ({
    id: builder.exposeID("id"),
    name: builder.exposeString("name"),
    pizzaTopping: builder.relation("pizzaTopping"),
  }),
});
