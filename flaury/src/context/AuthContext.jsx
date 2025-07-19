import { createContext, useContext, useEffect, useState } from "react";
import userAPI from "@/api/user/user";
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
    setIsLoading(true);

    try {
      const res = await fetch(userAPI.userAPI.getLoggedUser(), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(`${localStorage.getItem("accessToken")}`);
      

      if (!res.ok) {
        throw new Error(`Server responded ${res.status}: ${res.statusText}`);
      }
      const json = await res.json();

      // optional: validate the shape first
      if (!json?.data?.user) {
        throw new Error("Malformed response: missing `data.user`");
      }

      const user = json.data.user;
      setUser(user);
      localStorage.setItem("FLYuserData", JSON.stringify(user));
    } catch (err) {
      console.log("Error fetching user details:", err);
    } finally {
      setIsLoading(false);            // stop spinner
    }
  };


  //  =====================================================
  // ==================[ Fetch All Users ]=================
  // =====================================================

  const fetchAllUsers = async () => {
    try {
      const result = await userAPI.userAPI.getAllUsers(); // ✅ using authAPI
      if (result.success) {
        setFetchAllUsers(result.data.users);
      } else {
        console.log("Failed to fetch all users:", result.error);
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
