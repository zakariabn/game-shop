import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [listedItem, setListedItem] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => console.info("Data not found"));
  }, []);

  function getClickedItem(item) {
    const newListedItem = [...listedItem, item];
    setListedItem(newListedItem);
  }

  return (
    <div className="grid grid-cols-5">
      <div className=" mt-10 col-span-4 grid xl:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
        {products.map((product) => {
          const { _id, name, price, img } = product;
          return (
            <Product
              key={_id}
              name={name}
              img={img}
              price={price}
              item={product}
              clickedHandel={getClickedItem}></Product>
          );
        })}
      </div>
      <div className=" bg-[#e1e1e1] sticky top-0">
        <Cart listedItem={listedItem}></Cart>
      </div>
    </div>
  );
};

export default Shop;
