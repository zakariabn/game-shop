import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => console.info("Data not found"));
  }, []);

  return (
    <div className="grid grid-cols-5">
      <div className=" mt-10 col-span-4 grid grid-cols-3 justify-items-center gap-10">
        {products.map((product) => {
          const { id, name, price, img } = product;
          return (
            <Product key={id} name={name} img={img} price={price}></Product>
          );
        })}
      </div>
      <div className=" bg-[#e1e1e1] sticky top-0">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
