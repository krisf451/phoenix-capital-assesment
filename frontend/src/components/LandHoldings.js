import React, { useEffect } from "react";
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
    <div className="h-screen w-full flex bg-main-bg dark:bg-main-dark-bg dark:text-white">
      {isLoading ? (
        <Loader color="blue" />
      ) : (
        <div className="">
          {landHoldings?.map((landHolding, i) => (
            <LandHolding key={i} landHolding={landHolding} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LandHoldings;
