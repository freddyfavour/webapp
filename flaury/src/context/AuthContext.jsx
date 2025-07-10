import { createContext, useContext, useEffect, useState } from "react";
import authAPI from "@/api/user/user";
import PropTypes from "prop-types";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [allUser, setFetchAllUsers] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // =====================================================
  // ==================[ UserDetails ]====================
  // =====================================================

  const fetchUserDetails = async () => {
    try {
      const result = await authAPI.authAPI.getLoggedUser(); // ✅ using authAPI
      if (result.success) {
        const data = result.data;
        setUser(data.user);
        localStorage.setItem("FLYuserData", JSON.stringify(data.user));
        setIsLoading(true);
      } else {
        console.warn("Failed to fetch user details:", result.error);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  //  =====================================================
  // ==================[ Fetch All Users ]=================
  // =====================================================

  const fetchAllUsers = async () => {
    try {
      const result = await authAPI.authAPI.getAllUsers(); // ✅ using authAPI
      if (result.success) {
        setFetchAllUsers(result.data.users);
      } else {
        console.warn("Failed to fetch all users:", result.error);
      }
    } catch (error) {
      console.error("Error fetching all users:", error);
    }
  };

  // ===================[ Sync with Storage ]====================

  useEffect(() => {
    fetchUserDetails();

    const onStorageChange = (event) => {
      if (event.key === "FLYuserData") {
        fetchUserDetails();
      }
    };

    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  // ===================[ Load from localStorage ]====================

  useEffect(() => {
    const storedUserDetails = localStorage.getItem("FLYuserData");
    if (storedUserDetails) {
      setUser(JSON.parse(storedUserDetails));
      setIsLoading(true);
    }
  }, []);

  // ===================[ Log Out ]====================

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("FLYuserData");
    setUser("");
    setIsLoading(false);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        allUser,
        loading,
        isLoading,
        setLoading,
        fetchUserDetails,
        fetchAllUsers,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;


AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
