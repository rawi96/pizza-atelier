"use client";

import { ReactNode } from "react";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";

type Props = {
  children: ReactNode;
};

const client = createClient({
  url: "/api/graphql",
  requestPolicy: "cache-and-network",
  exchanges: [cacheExchange, fetchExchange],
});

export const UrqlProvider = ({ children }: Props) => (
  <Provider value={client}>{children}</Provider>
);
