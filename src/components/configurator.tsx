"use client";

import { CheckboxGroup } from "@/components/checkbox-group";
import { FC } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { useToppings } from "@/hooks/useToppings";

const checkboxItems = [
  {
    id: "comments",
    label: "Comments",
    description: "Get notified when someone posts a comment on a posting.",
  },
  {
    id: "candidates",
    label: "Candidates",
    description: "Get notified when a candidate applies for a job.",
  },
  {
    id: "offers",
    label: "Offers",
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

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


// psql "postgres://default:aHoPC0fn1bIQ@ep-old-glade-63252194.eu-central-1.postgres.vercel-storage.com:5432/verceldb"