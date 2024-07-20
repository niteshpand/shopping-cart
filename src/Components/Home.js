import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import "./style.css";
export const Home = () => {
  const {
    state: { product },
  } = CartState();

  console.log(product);
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {product.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};
export default Home;
