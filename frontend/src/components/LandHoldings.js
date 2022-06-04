import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { fetchAllLandHoldings } from "../api";
import { Loader, LandHolding } from "../components";
import toast from "react-hot-toast";

const LandHoldings = () => {
  const { landHoldings, setLandHoldings, isLoading, setIsLoading } =
    useStateContext();

  useEffect(() => {
    fetchLandHoldingData();
    //eslint-disable-next-line
  }, []);

  const fetchLandHoldingData = async () => {
    setIsLoading(true);
    let {
      data: { data },
    } = await fetchAllLandHoldings();
    if (data) {
      setLandHoldings(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error("Error Fetching Land Holdings...");
    }
  };

  return (
    <div className="min-h-screen w-full bg-main-bg dark:bg-main-dark-bg overflow-scroll scrollbar-hide flex justify-center">
      {isLoading ? (
        <Loader color="blue" />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/landHoldings/add"
            className="mt-4 bg-blue-500 h-10 w-auto text-white p-4 rounded-md flex items-center hover:bg-blue-700 transtion-all duration-300 ease-in-out"
          >
            Create New Land Holding
          </Link>

          <div className="flex flex-wrap gap-6 justify-center w-full my-4">
            {landHoldings?.map((landHolding, i) => (
              <LandHolding landHolding={landHolding} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandHoldings;
