import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="w-full bg-[#fff] flex justify-center items-center z-10">
      <Link to="/">
        <img src={logo} className="" />
      </Link>
    </div>
  );
};

export default Nav;
