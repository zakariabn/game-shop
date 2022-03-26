import React from "react";

const BestItem = ({ item }) => {
  // console.log(item);
  return (
    <div className="flex justify-between items-center px-5 py-2 my-5 mx-4 rounded-full bg-[#f5767669]">
      <img
        // src={img}
        alt=""
        className="w-[35px] h-[35px] rounded-full shadow-sm"
      />
      {/* <p className="font-bold">{name}</p> */}
    </div>
  );
};

export default BestItem;
