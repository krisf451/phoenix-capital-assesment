import React, { useState } from "react";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="h-screen w-full flex justify-center items-center bg-main-bg dark:bg-main-dark-bg">
      <div className="w-[450px] h-[50%] bg-white rounded-lg shadow-xl dark:shadow-none flex flex-col items-center justify-center dark:bg-secondary-dark-bg">
        <h1>{isSignup ? "Signin" : "Signup"}</h1>
      </div>
    </div>
  );
};

export default Auth;
