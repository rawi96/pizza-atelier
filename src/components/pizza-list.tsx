import { FC } from "react";

const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    ingredient1: "Co-Founder / CEO",
    ingredient2: "Co-Founder / CEO",
    ingredient3: "Co-Founder / CEO",
    ingredient4: "Co-Founder / CEO",
    ingredient5: "Co-Founder / CEO",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    ingredient1: "Co-Founder / CEO",
    ingredient2: "Co-Founder / CEO",
    ingredient3: "Co-Founder / CEO",
    ingredient4: "Co-Founder / CEO",
    ingredient5: "Co-Founder / CEO",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    ingredient1: "Co-Founder / CEO",
    ingredient2: "Co-Founder / CEO",
    ingredient3: "Co-Founder / CEO",
    ingredient4: "Co-Founder / CEO",
    ingredient5: "Co-Founder / CEO",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    ingredient1: "Co-Founder / CEO",
    ingredient2: "Co-Founder / CEO",
    ingredient3: "Co-Founder / CEO",
    ingredient4: "Co-Founder / CEO",
    ingredient5: "Co-Founder / CEO",
  },
  {
    id: 1,
    name: "Leslie Alexander",
    ingredient1: "Co-Founder / CEO",
    ingredient2: "Co-Founder / CEO",
    ingredient3: "Co-Founder / CEO",
    ingredient4: "Co-Founder / CEO",
    ingredient5: "Co-Founder / CEO",
  },
  // More people...
];

export const PizzaList: FC = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    {people.map((person) => (
      <div
        key={person.id}
        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm"
      >
        <div className="min-w-0 flex-1">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">{person.name}</p>
          <p className="truncate text-sm text-gray-500">{person.ingredient1}</p>
          <p className="truncate text-sm text-gray-500">{person.ingredient2}</p>
          <p className="truncate text-sm text-gray-500">{person.ingredient3}</p>
          <p className="truncate text-sm text-gray-500">{person.ingredient4}</p>
          <p className="truncate text-sm text-gray-500">{person.ingredient5}</p>
        </div>
      </div>
    ))}
  </div>
);
