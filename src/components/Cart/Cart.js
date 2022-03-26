import React from "react";

const Cart = () => {
  return (
    <div className="sticky top-0">
      <h2 className="text-4xl font-bold mt-14 text-center mb-9">
        Listed items
      </h2>

      {/* listed items */}
      <div className="mb-10">
        <ul>
          <li>d</li>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-y-5">
        <button className="text-white bg-[#d922e6] hover:text-gray-300 px-12 py-3 font-semibold text-xl rounded-xl">
          Best Deal
        </button>
        <button className="text-white bg-[#da7e15] hover:text-gray-300 px-12 py-3 font-semibold text-xl rounded-xl">
          Clear list
        </button>
      </div>
    </div>
  );
};

export default Cart;
