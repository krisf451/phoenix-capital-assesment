import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import { fetchAllLandHoldings } from "../api";
import { Loader } from "../components";

const LandHoldings = () => {
  const { landHoldings, setLandHoldings, isLoading, setIsLoading } =
    useStateContext();
  useEffect(() => {
    setIsLoading(true);
    fetchAllLandHoldings()
      .then((res) => {
        setLandHoldings(res?.data?.data);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
    //eslint-disable-next-line
  }, []);
  console.log(landHoldings);
  return (
    <div className="h-screen w-full flex bg-main-bg dark:bg-main-dark-bg dark:text-white">
      {isLoading ? <Loader color="blue" /> : <div>Test</div>}
    </div>
  );
};

export default LandHoldings;
