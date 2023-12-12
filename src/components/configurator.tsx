"use client";

import { CheckboxGroup } from "@/components/checkbox-group";
import { AddPizzaArgs } from "@/graphql-client/generated";
import { useAddPizzaMutation } from "@/hooks/useAddPizzaMutation";
import { useToppingsQuery } from "@/hooks/useToppingsQuery";
import { FC, FormEvent, useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { SuccessModal } from "./modal";
import { Spinner } from "./spinner";

const mapFormDataToAddPizzaArgs = (formData: FormData): AddPizzaArgs => {
  const data = Object.fromEntries(formData);
  return {
    name: data.text.toString(),
    toppingIds: [
      ...Object.entries(data)
        .filter(([key, value]) => value === "on")
        .map(([key, value]) => key),
    ],
  };
};

export const Configurator: FC = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { isLoading, toppings } = useToppingsQuery();
  
  const { executeMutation } = useAddPizzaMutation();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await executeMutation({
      data: mapFormDataToAddPizzaArgs(new FormData(event.currentTarget)),
    });

    if (data?.addPizza) {
      setIsSuccessModalOpen(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {toppings && (
            <form onSubmit={submitHandler} className="flex flex-col gap-20">
              <CheckboxGroup
                items={toppings?.map((topping) => ({
                  id: topping.id,
                  label: topping.name,
                }))}
              />
              <Input
                label="Wie söll die Pizza heisse?"
                placeholder="Krasse Pizza name"
              />
              <Button buttonText="Let's gooo" />
            </form>
          )}
        </>
      )}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
      />
    </>
  );
};
