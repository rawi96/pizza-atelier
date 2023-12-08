"use client";

import { CheckboxGroup } from "@/components/checkbox-group";
import { FC } from "react";
import { Button } from "./button";
import { Input } from "./input";

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

export const Configurator: FC = () => (
  <>
    <CheckboxGroup items={checkboxItems} />
    <Input label="Wie söll die Pizza heisse?" placeholder="Krasse Pizza name" />
    <Button buttonText="Let's gooo" onClick={() => {}} />
  </>
);
