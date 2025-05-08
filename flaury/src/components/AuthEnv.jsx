import React from "react";
import { ToastContainer } from "react-toastify";
import Card from "./Card";

const AuthEnv = ({ children, style = null }) => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-primaryColor relative lg:overflow-hidden">
      <ToastContainer />
      <div className="gradient-overlay-signup absolute inset-0"></div>
      <Card style={style} children={children} />
    </div>
  );
};

export default AuthEnv;
