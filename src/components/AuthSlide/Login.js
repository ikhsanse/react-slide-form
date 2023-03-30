import React, { useState } from "react";
import ShowPassword from "./ShowPassword";

const Login = ({ toggleSlide, statusSlide, signUpHidden }) => {
  const [typeInputPass, setTypeInputPass] = useState("password");

  const changeTypeInput = (type) => {
    setTypeInputPass(type);
  };
  return (
    <>
      {signUpHidden ? (
        <div className={`${signUpHidden ? 'login-enter' : ''}`}>
          <h1 className="text-2xl font-bold my-7">Sign In</h1>
          <form action="" className="w-full mx-auto mb-1">
            <input
              type="email"
              autoComplete="off"
              className="w-full py-2 pl-2 mb-3"
              placeholder="Email"
            />
           
            <div className="relative flex">
              <input
                type={typeInputPass}
                autoComplete="off"
                className="w-full py-2 pl-2 mb-5"
                placeholder="Password"
              />
              <ShowPassword onChangeType={changeTypeInput} />
            </div>
            <div className="w-full">
              <button className="w-full bg-sky-600 text-white font-bold py-2 hover:bg-sky-500 ease-in duration-200">
                Sign In
              </button>
            </div>
          </form>
          <div className="w-full text-sm select-none">
            <span className="">Already have an account ? </span>
            <span
              onClick={toggleSlide}
              className="text-sky-600 hover:underline cursor-pointer"
            >
              Sign In Here
            </span>
          </div>
        </div>
      ) : null}
      </>
  );
};

export default Login;
