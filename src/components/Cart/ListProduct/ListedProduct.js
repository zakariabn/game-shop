import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ListedProduct = ({ id, name, img, listedItem }) => {
  function removeItem(id) {
    for (const item of listedItem) {
      if (item._id + 1 === id) {
        console.log(true);
      }
    }
  }

  return (
    <div className="flex justify-between items-center px-5 py-2 my-5 mx-4 rounded-full bg-[#ffffff69]">
      <div className="flex items-center gap-x-6">
        <img
          src={img}
          alt=""
          className="w-[35px] h-[35px] rounded-full shadow-sm"
        />
        <p className="font-bold">{name}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="hover:cursor-pointer transition hover:text-[#ff7f50]"
        onClick={() => removeItem(id)}></FontAwesomeIcon>
    </div>
  );
};

export default ListedProduct;
