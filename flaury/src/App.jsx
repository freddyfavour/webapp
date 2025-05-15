import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./page/auth/Login";
import SignUp from "./page/auth/SignUp";
import Nav from "./components/Nav";
import ForgotPassword from "./page/auth/ForgotPassword";
import Forgot2 from "./page/auth/Forgot2";
import Forgot3 from "./page/auth/Forgot3";
import Home from "./page/Home";
import Dashboard from "./page/dashboard/Dashboard";
import MainNav from "./components/dashboard/MainNav";
import Notifications from "./page/dashboard/Notifications";
import Settings from "./page/dashboard/Settings";
import Favorites from "./page/dashboard/Favorites";
import Profile from "./page/dashboard/Profile";
import Bookings from "./page/dashboard/Bookings";
import Chat from "./page/dashboard/Chat";
import Search from "./page/dashboard/Search";
import SalonProfile from "./page/dashboard/SalonProfile";
import About from "./page/About";
import Blog from "./page/Blog";
import ChooseRole from "./page/auth/ChooseRole";
import BookingsFlow from "./page/dashboard/BookingsFlow";
import BSignup from "./page/auth/BSignup";
import BSignupCategory from "./page/auth/BSignupCategory";
import BSignupVerify from "./page/auth/BSignupVerify";
import BSignupDetails from "./page/auth/BSignupDetails";
import { useAuthStore } from "./store/authstore";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { isAuth, isSmallViewport, checkViewport } = useAuthStore();

  useEffect(() => {
    const handleResize = () => {
      checkViewport(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkViewport]);

  return (
    <>
      <ToastContainer />
      {!isAuth && <Nav/>}
      {isAuth && !isSmallViewport && <MainNav />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/business-signup"
          element={<BSignup />}
        />
        <Route
          path="/business-category"
          element={<BSignupCategory />}
        />
        <Route
          path="/business-details"
          element={<BSignupDetails />}
        />
        <Route
          path="/business-verification"
          element={<BSignupVerify />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot2" element={<Forgot2 />} />
        <Route path="/forgot3" element={<Forgot3 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/search" element={<Search />} />
        <Route path="/salon/:id" element={<SalonProfile />} />
        <Route path="/bookings-flow" element={<BookingsFlow />} />
      </Routes>
    </>
  );
};

export default App;
