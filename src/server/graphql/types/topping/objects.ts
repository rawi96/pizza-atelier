import { builder } from "../../builder";

builder.prismaObject("Topping", {
  fields: (builder) => ({
    id: builder.exposeID("id"),
    name: builder.exposeString("name"),
  }),
});
