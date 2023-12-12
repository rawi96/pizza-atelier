import {
  GetToppingsDocument,
  ToppingFragmentFragment,
} from "@/graphql-client/generated";
import { useQuery } from "urql";

export const useToppingsQuery = () => {
  const [{ fetching: isLoading, data }] = useQuery({
    query: GetToppingsDocument,
  });

  const toppings: ToppingFragmentFragment[] | undefined = data?.toppings;

  return {
    isLoading,
    toppings,
  };
};
