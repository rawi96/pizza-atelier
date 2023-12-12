import { createYoga } from "graphql-yoga";
import { NextRequest } from "next/server";
import { schema } from "../../../server/graphql/schema";

const yoga = createYoga({
  schema,
  fetchAPI: { Response, Request },
  graphqlEndpoint: "/api/graphql",
});

const handleYogaRequest = async (request: NextRequest) => yoga(request);

export const GET = handleYogaRequest;
export const POST = handleYogaRequest;
