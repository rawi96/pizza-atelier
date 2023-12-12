"use client";

import { CheckboxGroup } from "@/components/checkbox-group";
import { useToppings } from "@/hooks/useToppings";
import { FC } from "react";
import { Button } from "./button";
import { Input } from "./input";

export const Configurator: FC = () => {
  const { isLoading, toppings } = useToppings();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {toppings && toppings.length > 0 && (
            <CheckboxGroup
              items={toppings?.map((topping) => ({
                id: topping.id,
                label: topping.name,
              }))}
            />
          )}
        </>
      )}
      <Input
        label="Wie söll die Pizza heisse?"
        placeholder="Krasse Pizza name"
      />
      <Button buttonText="Let's gooo" onClick={() => {}} />
    </>
  );
};

