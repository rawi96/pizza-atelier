import {
  GetToppingsDocument,
  ToppingFragmentFragment,
} from "@/graphql-client/generated";
import { Topping } from "@prisma/client";
import { useQuery } from "urql";

export const useToppings = () => {
  const [{ fetching: isLoading, data }] = useQuery({
    query: GetToppingsDocument,
  });

  const toppings: ToppingFragmentFragment[] | undefined = data?.toppings;

  return {
    isLoading,
    toppings,
  };
};
