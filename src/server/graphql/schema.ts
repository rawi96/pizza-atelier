import { builder } from "./builder";

import "./types/topping";
import "./types/pizzaTopping";
import "./types/pizza";

export const schema = builder.toSchema();
