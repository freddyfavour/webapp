import React from "react";
import { ToastContainer } from "react-toastify";
import logo from "/logo.svg";

import Card from "./Card";
import { Link } from "react-router-dom";

const AuthEnv = ({ children, style = null }) => {
  return (
    <div >
      <div className="mx-auto flex justify-center items-center p-4 sm:p-8 h-[70px] border border-b">
        <Link to="/" className="z-50">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
      </div>
      <div className="h-screen w-full flex justify-center items-center bg-primary relative lg:overflow-hidden">
        <div className="gradient-overlay-signup absolute inset-0"></div>
        <Card style={style} children={children} />
      </div>
    </div>
  );
};

export default AuthEnv;
