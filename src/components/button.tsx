import { FC } from "react";

type Props = {
  buttonText: string;
};
export const Button: FC<Props> = ({ buttonText }) => (
  <button
    type="submit"
    className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    {buttonText}
  </button>
);
