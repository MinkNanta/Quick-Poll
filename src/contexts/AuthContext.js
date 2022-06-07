import React, { createContext, useContext, useEffect, useState } from "react";
import {
  setAccessToken,
  removeAccessToken,
  getAccessToken,
} from "../sevices/localStorage";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { Navigate } from "react-router";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const { error, setError } = useError();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get("/");
          setUser(res.data.user);
        }
      } catch (error) {
        removeAccessToken();
        Navigate("/");
      }
    };
    fetchUser();
  }, []);

  const signUp = async (body) => {
    try {
      const res = await axios.post("/signup", body);
      setAccessToken(res.data.token);
      setUser(res.data.token);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const findByEmail = async ({ email }) => {
    try {
      const res = await axios.get(`/signup?email=${email}`);
      return res.data.user.email;
    } catch (error) {}
  };

  const signIn = async (body) => {
    try {
      const res = await axios.post("/signin", body);
      setAccessToken(res.data.token);
      setUser(res.data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  const signOut = () => {
    removeAccessToken();
    setUser(null);
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
