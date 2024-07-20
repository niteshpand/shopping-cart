import React, { useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { createContext } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(), // Use imageUrl() for generating random image URLs
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]), // Use helpers.arrayElement() to pick an element from the array
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]), // Use helpers.arrayElement() for ratings as well
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    product: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
