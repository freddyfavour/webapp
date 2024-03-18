import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Nav from "./components/Nav";
import ForgotPassword from "./auth/ForgotPassword";
import Forgot2 from "./auth/Forgot2";
import Forgot3 from "./auth/Forgot3";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot2" element={<Forgot2 />} />
        <Route path="/forgot3" element={<Forgot3 />} />
      </Routes>
    </>
  );
};

export default App;
