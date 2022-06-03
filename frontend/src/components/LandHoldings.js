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
            to="/landHoldings/add"
            className="mt-4 bg-blue-500 h-10 text-white p-4 rounded-md flex items-center"
          >
            Create New Land Holding
          </Link>
          <div className="flex flex-wrap gap-6 justify-center w-full mt-4">
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
