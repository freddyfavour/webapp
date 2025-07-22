import PropTypes from "prop-types";
import logo from "/logo.svg";
import Card from "./Card";
import { Link } from "react-router-dom";

const AuthEnv = ({ children, style = null }) => {
  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="mx-auto w-full bg-white flex justify-center items-center p-4 sm:p-8 h-[80px] shadow-md border-b border-gray-200 z-50">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 drop-shadow-md" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" />
        <Card style={style}>{children}</Card>
      </div>
    </div>
  );
};

AuthEnv.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default AuthEnv;
