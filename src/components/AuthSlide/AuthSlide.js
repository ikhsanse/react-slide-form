import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthSlide = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignUpHidden, setSignUpHidden] = useState(true);

  const sideToggleHandler = () => {
    setIsSignUp(!isSignUp);
    // setTimeout(()=> setIsSignUp)
  };

  useEffect(() => {
    if (isSignUp) {
      setTimeout(() => setSignUpHidden(false), 300);
    } else {
      setTimeout(() => setSignUpHidden(true), 300);
    }
  }, [isSignUp]);
  return (
    <div className="relative overflow-hidden flex flex-row top-[25%] min-h-[300px] max-w-3xl bg-slate-300 shadow-xl just mx-auto justify-between md:rounded">
      <div
        className={`${
          isSignUpHidden ? "w-3/4 md:w-1/2" : "w-1/4 md:w-1/2"
        } px-5 z-0`}
      >
        <Login
          signUpHidden={isSignUpHidden}
          statusSlide={isSignUp}
          toggleSlide={sideToggleHandler}
        />
      </div>
      <div
        className={`${
          isSignUpHidden ? "w-1/4 md:w-1/2" : "w-3/4 md:w-1/2"
        } px-5 z-0`}
      >
        <Register
          signUpHidden={isSignUpHidden}
          statusSlide={isSignUp}
          toggleSlide={sideToggleHandler}
        />
      </div>

      <div
        className={`${
          isSignUp
            ? "right-[80%] md:right-1/2 md:rounded-l-sm"
            : "right-[-80%] md:right-0 md:rounded-r-sm"
        } absolute w-full md:w-1/2 z-20 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ease-in duration-500`}
      />
    </div>
  );
};

export default AuthSlide;
