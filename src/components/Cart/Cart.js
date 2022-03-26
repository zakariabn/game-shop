import React from "react";
import ListedProduct from "./ListProduct/ListedProduct";

const Cart = ({ listedItem, clearList }) => {
  return (
    <div className="sticky top-0">
      <h2 className="text-4xl font-bold mt-14 text-center mb-9">
        Listed items
      </h2>

      {/* listed items */}
      <div className="mb-10">
        {listedItem.map((item) => {
          const { _id, name, price, img } = item;

          /* const isFound = listedItem.find(item._id)
          if () {

          }
          else {
            
          } */
          return (
            <ListedProduct
              key={_id}
              id={_id + 1}
              name={name}
              img={img}
              price={price}
              listedItem={listedItem}></ListedProduct>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-y-5">
        <button className="text-white bg-[#d922e6] hover:text-gray-300 px-12 py-3 font-semibold text-xl rounded-xl">
          Best For Me
        </button>
        <button
          className="text-white bg-[#da7e15] hover:text-gray-300 px-12 py-3 font-semibold text-xl rounded-xl"
          onClick={() => clearList()}>
          Clear list
        </button>
      </div>
    </div>
  );
};

export default Cart;
