import { createContext, useContext, useEffect, useState } from "react";
import userAPI from "@/api/user/user";
import PropTypes from "prop-types";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  // user starts null, not empty string
  const [user, setUser] = useState(null);
  // allUser should be array, not string
  const [allUser, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // loading spinner for fetch

  // fetch user only if token exists
  const fetchUserDetails = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setUser(null); // no token → user is out
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(userAPI.userAPI.getLoggedUser(), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // only send valid token
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      const json = await res.json();

      if (!json?.data?.user) throw new Error("Malformed response");

      setUser(json.data.user);
      localStorage.setItem("FLYuserData", JSON.stringify(json.data.user));
    } catch (err) {
      console.log("Error fetching user details:", err);
      setUser(null);
      localStorage.removeItem("FLYuserData"); // clear invalid data
    } finally {
      setIsLoading(false);
    }
  };

  // fetch all users, cleaned variable name
  const fetchAllUsers = async () => {
    try {
      const result = await userAPI.userAPI.getAllUsers();
      if (result.success) setAllUsers(result.data.users);
      else console.log("Failed to fetch all users:", result.error);
    } catch (err) {
      console.error("Error fetching all users:", err);
    }
  };

  // listen to storage changes, only refetch if token exists
  useEffect(() => {
    fetchUserDetails();

    const handleStorageChange = (event) => {
      if (event.key === "FLYuserData" && localStorage.getItem("accessToken")) {
        fetchUserDetails();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // load user from storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("FLYuserData");
    if (storedUser) setUser(JSON.parse(storedUser));
    setIsLoading(false);
  }, []);

  // logout clears everything and resets states
  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("FLYuserData");
    setUser(null);
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
