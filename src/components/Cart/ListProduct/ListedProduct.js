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
    <div className="flex justify-between px-5 my-5">
      <div className="flex gap-x-6">
        <img src={img} alt="" className="w-[25px] h-[25px] rounded-full" />
        <p>{name}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="hover:cursor-pointer transition hover:text-[#ff7f50]"
        onClick={() => removeItem(id)}></FontAwesomeIcon>
    </div>
  );
};

export default ListedProduct;
