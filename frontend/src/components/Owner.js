import React from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { deleteOwner } from "../api";
import { useStateContext } from "../context/StateContext";
import toast from "react-hot-toast";

const Owner = ({ owner }) => {
  const { owners, setOwners } = useStateContext();

  const handleDelete = async (e) => {
    e.stopPropagation();
    const { data } = await deleteOwner(owner?._id);
    console.log(data);
    if (data?.message) {
      setOwners(owners.filter((item) => item._id !== owner?._id));
      toast.success(
        `Successfully deleted Owner with ID ${owner?._id} and ${data?.deletedHoldings} of their land holdings`
      );
    } else {
      toast.error(`Error deleting Owner with ID ${owners?._id}`);
    }
  };

  return (
    <div className="h-[300px] w-[300px] bg-gray-200 dark:bg-secondary-dark-bg dark:text-white rounded-md shadow-lg flex flex-col justify-between p-2 cursor-pointer">
      {/* LandHolding Info */}
      <div className="flex flex-col justify-start items-start ">
        <p>Name: {owner.name}</p>
        <p>Entity Type: {owner.entityType}</p>
        <p>Owner Type: {owner.ownerType}</p>
        <p>Address: {owner.address}</p>
        <p>Total Holdings: {owner.totalHoldings}</p>
      </div>
      {/* Edit/Delete Icons */}
      <div className="flex w-full justify-between items-center">
        <Link to={`/owners/${owner?._id}/edit`}>
          <AiFillEdit size={25} />
        </Link>

        <BsTrash size={25} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Owner;
