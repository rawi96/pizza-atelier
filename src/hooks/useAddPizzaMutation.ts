import { AddPizzaDocument } from "@/graphql-client/generated";
import { useMutation } from "urql";

export const useAddPizzaMutation = () => {
  const [result, executeMutation] = useMutation(AddPizzaDocument);

  return { result, executeMutation };
};
