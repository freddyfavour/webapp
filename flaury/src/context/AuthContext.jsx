"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const navigate = usePathname();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState("");
  const [allUser, setfetchAllUsers] = useState("");
  const [course, setCourse] = useState("");
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  const [image, setImage] = useState("");
  const [displayName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [programme, setProgramme] = useState("");
  const [level, setLevel] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const [isAvailable, setIsAvailable] = useState("");
  const [loading, setLoading] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const [updateloading, setUpdateLoading] = useState(false);

  const [subject, setSubject] = useState("");
  const [message, setMessageBody] = useState("");

  // =====================================================
  // ===================[ GetLocation ]===================
  // =====================================================

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch country information");
            }
            const data = await response.json();
            // const country = data.address.country;
            setCountry(data.address);
          } catch (error) {
            setError("Failed to retrieve country");
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // =====================================================
  // =====================[ SIGN UP ]=====================
  // =====================================================

  const createUserAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: displayName,
          username,
          email,
          institution,
          password,
          confirmPassword,
          referralCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("bbToken", data.token);
        toast.success("Register Successful 🥳");
        localStorage.setItem("userInfo", JSON.stringify(user));
        setTimeout(() => {
          window.location.href = "/profile/update-profile";
        }, 2000);
        setTimeout(() => {
          fetchUserDetails();
          fetchAllUsers();
        }, 2500);
      } else {
        toast.error(data.message);
        // console.log(data);
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // =====================[ SIGN IN ]=====================
  // =====================================================

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem("bbToken", data.token);

        toast.success("Login successful!");
        setTimeout(() => {
          window.location.href = "/portfolio";
        }, 2000);
        setTimeout(() => {
          fetchAllUsers();
          fetchUserDetails();
        }, 2500);
      } else {
        toast.error(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // ==================[ UserDetails ]====================
  // =====================================================

  const fetchUserDetails = async () => {
    const response = await fetch(
      `/api/getProfile?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("bbToken")}`,
        },
      }
    );
    if (response.ok) {
      response.json().then((data) => {
        setUser(data.user);
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        setisLoading(true);
      });
    } else if (response) {
      response.json().then((data) => { });
    }
  };

  const updateUser = async () => {
    setUpdateLoading(true);
    try {
      const response = await fetch("/api/updateProfile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("bbToken")}`,
        },
        body: JSON.stringify({
          image: `${localStorage.getItem("BB_profileImage")}`,
          fullName: displayName,
          email,
          institution,
          faculty,
          department,
          programme,
          level,
          phone,
          gender,
          bio,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success("Profile updated successfully!");
        localStorage.setItem("userInfo", JSON.stringify(data));
        window.location.href = "/profile";
        setUser(data);
        fetchUserDetails();
        fetchAllUsers();
      } else {
        console.error("Failed to update profile");
        toast.error("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setUpdateLoading(false);
    }
  };

  //  =====================================================
  // ==================[ fetch All Users ]====================
  // =====================================================

  const fetchAllUsers = async () => {
    const response = await fetch(
      `/api/getAllUsers?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZ`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("bbToken")}`,
        },
      }
    );
    if (response.ok) {
      response.json().then((data) => {
        setfetchAllUsers(data.users);
      });
    } else if (response) {
      response.json().then((data) => { });
    }
  };

  // =====================================================
  // ==================[ ForgotPassword ]=================
  // =====================================================
  useEffect(() => {
    const storedEmail = localStorage.getItem("emailForReset");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, [setEmail]);

  const sendForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("bbToken", data.token);
        localStorage.setItem("emailForReset", email);
        toast.success("OTP sent to email");
        // window.location.href = "/verification";
      } else {
        toast.error(data.message || "Password reset failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during Password reset:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    // fetchAllUsers();
    window.addEventListener("storage", (event) => {
      if (event.key === "userInfo") {
        fetchUserDetails();
      }
    });
  }, []);

  const sendContactForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          message,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Message successful!");
      } else {
        toast.error("Message failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during Message:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('/api/subscription-checker', {
          method: 'PUT',
          credentials: 'include',
        });
        if (response.ok) setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkSession();
  }, []);



  const handleUpdateReferral = async () => {
    try {
      const token = localStorage.getItem('bbToken'); // Ensure token is stored securely

      if (!token) {
        console.log('Token not found. Please log in.');
        return;
      }

      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);

        if (data.oldReferralCount < data.newReferralCount) {
          const newCount = data.newReferralCount - data.oldReferralCount;
          const updatedWalletBalance = user?.wallet_balance + (newCount * 30);
          const res = await fetch("/api/wallet_balance", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ wallet_balance: updatedWalletBalance }),
          });

          if (res.ok) {
            setUser((prev) => ({ ...prev, wallet_balance: updatedWalletBalance, referralCount: data.newReferralCount }));
            toast.success("Referral bonus added to your wallet!");
            fetchUserDetails()
          } else {
            console.error("Error updating wallet balance");
          }
        }
      } else {
        console.log(data.message || 'Failed to update referral count');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    handleUpdateReferral();
  }, []);

  const logOut = async () => {
    const userId = user.id;
    try {
      const response = await fetch(`/api/logout?userId=${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("bbToken")}`,
        },
      });

      const data = await response.json();
      if (response.ok || data.message === "User session not found.") {
        toast.success(data.message);
        localStorage.removeItem("bbToken");
        localStorage.removeItem("userInfo");
        window.location.href = "/";
      } else {
        console.log("Logout failed:", data.message);
      }
    } catch (error) {
      console.log("Logout error:", error);
    }
  };


  // Retrieve user details from localStorage
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userInfo");

    if (storedUserDetails) {
      const userInfo = JSON.parse(storedUserDetails);
      setUser(userInfo);
      setisLoading(true);
      // console.log(userInfo);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        show,
        token,
        user,
        allUser,
        course,
        loading,
        isloading,
        updateloading,
        isAvailable,
        isAuthenticated,
        error,

        country,
        username,
        password,
        confirmPassword,

        image,
        setImage,
        displayName,
        setFullName,
        email,
        setEmail,
        institution,
        setInstitution,
        faculty,
        setFaculty,
        department,
        setDepartment,
        programme,
        setProgramme,
        level,
        setLevel,
        phone,
        setPhone,
        gender,
        setGender,
        bio,
        setBio,
        referralCode,
        setReferralCode,

        subject,
        setSubject,
        message,
        setMessageBody,

        setUsername,
        setPassword,
        setConfirmPassword,
        setLoading,
        setIsAvailable,
        setIsAuthenticated,

        sendContactForm,
        getLocation,
        updateUser,
        fetchUserDetails,
        fetchAllUsers,
        createUserAccount,
        sendForgotPassword,
        handleLogin,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
