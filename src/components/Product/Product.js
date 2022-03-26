import React from "react";

const Product = ({ name, price, img, item, clickedHandel }) => {
  return (
    <div className="bg-[#e1e1e1] p-2 w-[300px] rounded-2xl relative">
      <div className="flex justify-center mb-5">
        <img
          src={img}
          alt={name + "poster"}
          className="w-[250px] h-[350px]  shadow-lg shadow-[#232b44]  border-[#e67e22] rounded-lg"
        />
      </div>
      <div className="ml-2">
        <p className="text-2xl font-bold text-blue-900 mb-4">{name}</p>
        <p className="text-xl font-bold mb-14">Price: ${price}</p>
      </div>
      <button
        className="bg-[#e67322] transition hover:bg-[#f18f0e] hover:rounded-b-2xl w-full h-[40px] absolute bottom-0 left-[-0] text-blue-900 font-bold"
        onClick={() => clickedHandel(item)}>
        Add to List
      </button>
    </div>
  );
};

export default Product;
