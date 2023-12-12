import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  ok: Scalars['Boolean']['output'];
};

export type Pizza = {
  __typename?: 'Pizza';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pizzaTopping: Array<PizzaTopping>;
};

export type PizzaTopping = {
  __typename?: 'PizzaTopping';
  id: Scalars['ID']['output'];
  pizza: Pizza;
  topping: Topping;
};

export type Query = {
  __typename?: 'Query';
  ok: Scalars['Boolean']['output'];
  pizzas: Array<Pizza>;
  toppings: Array<Topping>;
};

export type Topping = {
  __typename?: 'Topping';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ToppingFragmentFragment = { __typename?: 'Topping', id: string, name: string };

export type PizzaFragmentFragment = { __typename?: 'Pizza', id: string, name: string, pizzaTopping: Array<{ __typename?: 'PizzaTopping', id: string, topping: { __typename?: 'Topping', id: string, name: string } }> };

export type PizzaToppingFragmentFragment = { __typename?: 'PizzaTopping', id: string, topping: { __typename?: 'Topping', id: string, name: string } };

export type GetToppingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToppingsQuery = { __typename?: 'Query', toppings: Array<{ __typename?: 'Topping', id: string, name: string }> };

export type GetPizzasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPizzasQuery = { __typename?: 'Query', pizzas: Array<{ __typename?: 'Pizza', id: string, name: string, pizzaTopping: Array<{ __typename?: 'PizzaTopping', id: string, topping: { __typename?: 'Topping', id: string, name: string } }> }> };

export const ToppingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ToppingFragmentFragment, unknown>;
export const PizzaToppingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PizzaToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PizzaTopping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"topping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ToppingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<PizzaToppingFragmentFragment, unknown>;
export const PizzaFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PizzaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pizza"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pizzaTopping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PizzaToppingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PizzaToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PizzaTopping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"topping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ToppingFragment"}}]}}]}}]} as unknown as DocumentNode<PizzaFragmentFragment, unknown>;
export const GetToppingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetToppings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toppings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ToppingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetToppingsQuery, GetToppingsQueryVariables>;
export const GetPizzasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPizzas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pizzas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PizzaFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Topping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PizzaToppingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PizzaTopping"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"topping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ToppingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PizzaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pizza"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pizzaTopping"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PizzaToppingFragment"}}]}}]}}]} as unknown as DocumentNode<GetPizzasQuery, GetPizzasQueryVariables>;