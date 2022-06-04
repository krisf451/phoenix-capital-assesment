import React from "react";
import { useStateContext } from "../context/StateContext";

const Profile = () => {
  const { authData } = useStateContext();
  return (
    <div className="h-screen w-full flex bg-main-bg dark:bg-main-dark-bg dark:text-white justify-center items-center">
      <div className="h-12 w-auto rounded-md flex justify-center items-center bg-gray-200 dark:bg-secondary-dark-bg dark:text-white">
        <p className="mx-4">{authData.email}</p>
      </div>
    </div>
  );
};

export default Profile;
