import { FC } from "react";

type CheckboxProps = {
  items: CheckboxItemProps[];
};

export const CheckboxGroup: FC<CheckboxProps> = ({ items }) => (
  <fieldset>
    <legend className="sr-only">Notifications</legend>
    <div className="space-y-5">
      {items.map((item) => (
        <CheckboxItem key={item.id} {...item} />
      ))}
    </div>
  </fieldset>
);

type CheckboxItemProps = {
  id: string;
  label: string;
};

const CheckboxItem: FC<CheckboxItemProps> = ({ id, label }) => (
  <div className="relative flex items-start">
    <div className="flex h-6 items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
    </div>
    <div className="ml-3 text-sm leading-6">
      <label htmlFor={id} className="font-medium text-gray-900">
        {label}
      </label>
    </div>
  </div>
);
