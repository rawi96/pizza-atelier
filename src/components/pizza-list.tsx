"use client";

import { usePizzasQuery } from "@/hooks/usePizzasQuery";
import { FC } from "react";
import { Spinner } from "./spinner";

export const PizzaList: FC = () => {
  const { isLoading, pizzas } = usePizzasQuery();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-3 sm:gap-px sm:divide-y-0">
            {pizzas &&
              pizzas.map((pizza) => (
                <div
                  key={pizza.id}
                  className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                >
                  <span className="h-6 w-6" aria-hidden="true">
                    🍕
                  </span>
                  <div className="mt-8">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {pizza.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {pizza.pizzaTopping
                        .map((pizzaTopping) => pizzaTopping.topping.name)
                        .join(", ")}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};
