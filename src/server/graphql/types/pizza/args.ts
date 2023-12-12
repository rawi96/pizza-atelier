import { builder } from "../../builder";

export const addPizzaArgs = builder.inputType("addPizzaArgs", {
  fields: (builder) => ({
    name: builder.string({ required: true }),
    toppingIds: builder.stringList({ required: true }),
  }),
});
