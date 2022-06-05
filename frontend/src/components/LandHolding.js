import React from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { deleteLandHolding } from "../api";
import { useStateContext } from "../context/StateContext";
import toast from "react-hot-toast";
import moment from "moment";

const LandHolding = ({ landHolding }) => {
  const { setLandHoldings, landHoldings } = useStateContext();

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

  return (
    <div className="h-[240px] w-full sm:w-[360px] bg-gray-100 dark:bg-secondary-dark-bg dark:text-white rounded-md shadow-lg flex flex-col items-center justify-between p-2">
      {/* LandHolding Info */}
      <h2 className="opacity-80 hover:opacity-100 dark:text-white">
        {landHolding.titleSource.toUpperCase()}
      </h2>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Owner:{" "}
          <span className="text-gray-700 dark:text-white">
            {landHolding.owner}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Name:{" "}
          <span className="text-gray-700 dark:text-white truncate">
            {landHolding.name.length > 20
              ? landHolding.name.substr(0, 20)
              : landHolding.name}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Legal Entity:{" "}
          <span className="text-gray-700 dark:text-white">
            {landHolding.legalEntity}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Net Acres:{" "}
          <span className="text-gray-700 dark:text-white">
            {landHolding.owner}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Royalty:{" "}
          <span className="text-gray-700 dark:text-white">
            {landHolding.owner}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Secion Name:{" "}
          <span className="text-gray-700 dark:text-white">
            {landHolding.owner}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Created At:{" "}
          <span className="text-gray-700 dark:text-white">
            {moment(
              landHolding.createdAt,
              moment.HTML5_FMT.DATETIME_LOCAL_MS
            ).format("YYYY-MM-DD HH:mm:ss")}
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Created At:{" "}
          <span className="text-gray-700 dark:text-white">
            {moment(
              landHolding.updatedAt,
              moment.HTML5_FMT.DATETIME_LOCAL_MS
            ).format("YYYY-MM-DD HH:mm:ss")}
          </span>
        </p>
      </div>
      {/* Edit/Delete Icons */}
      <div className="flex w-full justify-between items-center mx-4">
        <Link to={`/landHoldings/${landHolding?._id}/edit`}>
          <AiFillEdit size={25} />
        </Link>
        <BsTrash size={25} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default LandHolding;
