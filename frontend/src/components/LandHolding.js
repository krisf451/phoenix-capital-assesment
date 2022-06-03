import React from "react";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const LandHolding = ({ landHolding }) => {
  return (
    <div className="h-[300px] w-[300px] bg-gray-200 dark:bg-secondary-dark-bg dark:text-white rounded-md shadow-lg flex flex-col items-center justify-between p-2 transition-transform duration-300 ease-linear hover:scale-105 cursor-pointer">
      {/* LandHolding Info */}
      <div>
        <p>Owner: {landHolding.owner}</p>
        <p>Name: {landHolding.name}</p>
        <p>Legal Entity: {landHolding.legalEntity}</p>
        <p>NetAcres: {landHolding.netMineralAcres}</p>
        <p>Title Source: {landHolding.titleSource.toUpperCase()}</p>
        <p>Updated At: {landHolding.createdAt}</p>
        <p>Created At: {landHolding.updatedAt}</p>
      </div>
      {/* Edit/Delete Icons */}
      <div className="flex w-full justify-between items-center">
        <AiFillEdit />
        <BsTrash />
      </div>
    </div>
  );
};

export default LandHolding;
