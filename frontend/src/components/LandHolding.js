import React from "react";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { deleteLandHolding, fetchAllLandHoldings } from "../api";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import toast from "react-hot-toast";

const LandHolding = ({ landHolding }) => {
  const { setLandHoldings, landHoldings } = useStateContext();
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    e.stopPropagation();
    const { data } = await deleteLandHolding(landHolding?._id);
    if (data?.message) {
      setLandHoldings(
        landHoldings.filter((item) => item._id !== landHolding?._id)
      );
      toast.success(
        `Successfully deleted land holding with ID ${landHolding?._id}`
      );
    } else {
      toast.error(`Error deleting Land Holding with ID ${landHolding?._id}`);
    }
  };
  const openLandHolding = () => {
    navigate(`/landHoldings/${landHolding?._id}`);
  };
  return (
    <div
      className="h-[300px] w-[300px] bg-gray-200 dark:bg-secondary-dark-bg dark:text-white rounded-md shadow-lg flex flex-col items-center justify-between p-2 cursor-pointer"
      onClick={openLandHolding}
    >
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
        <AiFillEdit size={25} />
        <BsTrash size={25} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default LandHolding;
