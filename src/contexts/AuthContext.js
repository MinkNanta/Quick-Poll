import React, { createContext, useContext, useEffect, useState } from "react";
import {
  setAccessToken,
  removeAccessToken,
  getAccessToken,
} from "../sevices/localStorage";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useNavigate } from "react-router";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [fetch, setFetch] = useState(false);
  const [userName, setUserName] = useState(null);
  const { error, setError } = useError("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get("/");
          setUserName(res.data.user.email.split("@")[0]);
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        removeAccessToken();
        navigate("/");
      }
    };
    fetchUser();
  }, [fetch]);

  console.log(user);

  const signUp = async (body) => {
    try {
      const res = await axios.post("/signup", body);
      // setUserName(user?.email?.split("@")[0]);
      setAccessToken(res.data.token);
      setUser(res.data.token);
      setFetch((p) => !p);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const findByEmail = async ({ email }) => {
    try {
      const res = await axios.get(`/signup?email=${email}`);
      return res.data.user.email;
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (body) => {
    try {
      const res = await axios.post("/signin", body);
      // setUserName(user?.email?.split("@")[0]);
      setAccessToken(res.data.token);
      setFetch((p) => !p);
      setUser(res.data.token);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  const signOut = () => {
    removeAccessToken();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signUp,
        signOut,
        signIn,
        findByEmail,
        userName,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const ctx = useContext(AuthContext);
  return ctx;
}

export default AuthContextProvider;
export { useAuth, AuthContext };
