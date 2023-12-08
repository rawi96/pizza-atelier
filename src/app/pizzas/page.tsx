import { PizzaList } from "@/components/pizza-list";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Alli Pizzas</h1>
      <PizzaList />
    </>
  );
};

export default Home;
