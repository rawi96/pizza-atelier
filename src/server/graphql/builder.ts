import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import PrismaTypes from "@pothos/plugin-prisma/generated";
import { Session } from "inspector";
import { prisma } from "./prisma/prisma";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Context: {
    session?: Session;
  };
  AuthScopes: {
    isUser: boolean;
    isAdmin: boolean;
  };
}>({
  plugins: [PrismaPlugin],

  prisma: {
    client: prisma,
    filterConnectionTotalCount: true,
  },
});

builder.queryType({
  fields: (builder) => ({
    ok: builder.boolean({
      resolve: () => true,
    }),
  }),
});

builder.mutationType({
  fields: (builder) => ({
    ok: builder.boolean({
      resolve: () => true,
    }),
  }),
});
