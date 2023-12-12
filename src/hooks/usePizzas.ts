import {
  GetPizzasDocument,
  PizzaFragmentFragment
} from "@/graphql-client/generated";
import { useQuery } from "urql";

export const usePizzas = () => {
  const [{ fetching: isLoading, data }] = useQuery({
    query: GetPizzasDocument,
  });

  const pizzas: PizzaFragmentFragment[] | undefined = data?.pizzas;

  return {
    isLoading,
    pizzas,
  };
};
