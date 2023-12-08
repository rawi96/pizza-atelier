import { Configurator } from "@/components/configurator";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Erfind dini Pizza</h1>
      <Configurator />
    </>
  );
};

export default Home;
