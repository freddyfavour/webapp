import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./page/auth/Login";
import SignUp from "./page/auth/SignUp";
import ForgotPassword from "./page/auth/ForgotPassword";
import Forgot2 from "./page/auth/Forgot2";
import Forgot3 from "./page/auth/Forgot3";
import Home from "./page/Home";
import Dashboard from "./page/dashboard";
import Notifications from "./page/dashboard/Notifications";
import Settings from "./page/dashboard/Settings";
import Favorites from "./page/dashboard/Favorites";
import Profile from "./page/dashboard/Profile";
import Bookings from "./page/dashboard/bookings/Bookings";
import BookingsFlow from "./page/dashboard/bookings/BookingsFlow";
import Booking_Details from "./page/dashboard/bookings/Booking_Details";
import Chat from "./page/dashboard/Chat";
import Search from "./page/dashboard/Search";
import SalonProfile from "./page/dashboard/SalonProfile";
import About from "./page/About";
import Blog from "./page/Blog";
import ChooseRole from "./page/auth/ChooseRole";
import { useAuthStore } from "./store/authstore";
import { ToastContainer } from "react-toastify";
import Registration from "./page/auth/registration";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { fetchUserDetails } = useAuth();
  const { checkViewport } = useAuthStore();

  useEffect(() => {
    const handleResize = () => {
      checkViewport(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkViewport]);

  useEffect(() => {
    fetchUserDetails()
  }, []);

  return (
    <>
      <ToastContainer />
      {/* {isAuth && !isSmallViewport && <MainNav />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/choose-role" element={<ChooseRole />} />
        <Route path="/login" element={<Login fetchUserDetails={fetchUserDetails} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<Registration />} />


        {/* TODO: Complete all ports to the Route method */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot2" element={<Forgot2 />} />
        <Route path="/forgot3" element={<Forgot3 />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/:id" element={<Booking_Details />} />
        <Route path="/bookings-flow" element={<BookingsFlow />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/search" element={<Search />} />
        <Route path="/salon/:id" element={<SalonProfile />} />
      </Routes>
    </>
  );
};

export default App;
