import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ShowPassword = (props) => {
  const [show, setShow] = useState(false);
  
  const changeTypeInputPass = () => {
    if (!show) {
      props.onChangeType("text");
    } else {
      props.onChangeType('password');
    }
  };
  const showPass = () => {
    setShow(!show);
    changeTypeInputPass();
 
  };
  return (
    <div
      onClick={showPass}
      className="absolute hover:bg-slate-300 p-3 right-0 ease-in duration-200"
    >
      {!show ? <FaEye /> : <FaEyeSlash />}
    </div>
  );
};

export default ShowPassword;
