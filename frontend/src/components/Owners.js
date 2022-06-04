import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { fetchAllOwners } from "../api";
import { Loader, Owner } from "../components";
import toast from "react-hot-toast";

const Owners = () => {
  const { owners, setOwners, isLoading, setIsLoading } = useStateContext();

  useEffect(() => {
    fetchOwnerData();
    //eslint-disable-next-line
  }, []);

  const fetchOwnerData = async () => {
    setIsLoading(true);
    let {
      data: { data },
    } = await fetchAllOwners();
    if (data) {
      setOwners(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error("Error Fetching Land Holdings...");
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-main-bg dark:bg-main-dark-bg overflow-scroll scrollbar-hide justify-center">
      {isLoading ? (
        <Loader color="blue" />
      ) : (
        <div className="flex flex-col items-center">
          <Link
            to="/owners/add"
            className="mt-4 bg-blue-500 h-10 text-white p-4 rounded-md flex items-center hover:bg-blue-700 transtion-all duration-300 ease-in-out"
          >
            Create New Owner
          </Link>
          <div className="flex flex-wrap gap-6 justify-center w-full mt-4">
            {owners?.map((owner, i) => (
              <Owner owner={owner} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Owners;
