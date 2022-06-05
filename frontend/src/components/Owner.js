import React from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { deleteOwner } from "../api";
import { useStateContext } from "../context/StateContext";
import toast from "react-hot-toast";
import moment from "moment";

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
    <div className="h-[240px] w-full sm:w-[360px] bg-gray-100 dark:bg-secondary-dark-bg dark:text-white rounded-md shadow-lg flex flex-col items-center justify-between p-2">
      {/* LandHolding Info */}
      <h2 className="opacity-80 hover:opacity-100 dark:text-white">
        {owner.name.toUpperCase()}
      </h2>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Entity Type:{" "}
          <span className="text-gray-700 dark:text-white">
            {owner.entityType}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Owner Type:{" "}
          <span className="text-gray-700 dark:text-white">
            {owner.ownerType}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Address:{" "}
          <span className="text-gray-700 dark:text-white">{owner.address}</span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Total Holdings:{" "}
          <span className="text-gray-700 dark:text-white">
            {owner.totalHoldings}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Created At:{" "}
          <span className="text-gray-700 dark:text-white">
            {moment(owner.createdAt, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(
              "YYYY-MM-DD HH:mm:ss"
            )}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Updated At:{" "}
          <span className="text-gray-700 dark:text-white">
            {moment(owner.updatedAt, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(
              "YYYY-MM-DD HH:mm:ss"
            )}
          </span>
        </p>
      </div>
      {/* Edit/Delete Icons */}
      <div className="flex w-full justify-between items-center mx-4">
        <Link to={`/owners/${owner?._id}/edit`}>
          <AiFillEdit size={25} />
        </Link>
        <BsTrash size={25} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Owner;
