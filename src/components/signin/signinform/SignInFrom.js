import React, { useEffect, useState } from "react";
import Input from "../../from/Input";
import { BeakerIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/SignUpContext";
import AuthServices from "../../authservices/AuthServices";

export default function SignInFrom() {
  const { user, setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitSignIn = async (e) => {
    try {
      e.preventDefault();
      // if (!validator.isEmail(email)) {
      //   return console.log("not email");
      // }
      setUser(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="bigTitle">So glad you're here!</h2>

      <form className="flex flex-col gap-y-6" onSubmit={handleSubmitSignIn}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <Link to="/resetpassword">Reset password</Link>
        <button type="submit" className="primarySmall">
          Sign in
        </button>
        <AuthServices />
        <h6 className="text-center">
          Don’t have account? <Link to="/signUp"> sign up </Link>
        </h6>
      </form>
    </>
  );
}
