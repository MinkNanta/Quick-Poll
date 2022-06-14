import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import AuthServices from "../../authservices/AuthServices";
import Form from "../../from/Form";
import InputYup from "../../from/InputYup";
import SubmitButton from "../../from/SubmitButton";
import * as yup from "yup";

export default function SignInFromForModal({ setOpen }) {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const isEmail = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const handleSubmitSignIn = async ({ email, password }) => {
    try {
      const body = { email: email, password: password };
      await signIn(body);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-left space-y-4">
      <h2>Please login</h2>

      <Form schema={isEmail} className="flex flex-col gap-y-6">
        <InputYup
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <InputYup
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        <SubmitButton onClick={handleSubmitSignIn}>Sign in</SubmitButton>
      </Form>
      <div className="pt-2">
        <Link
          to="/resetpassword"
          className="text-[14px] text-t_support opacity-60 hover:opacity-80"
        >
          Reset password
        </Link>
      </div>
      <AuthServices />
      <p className="text-center">
        Don’t have account?{" "}
        <Link className="text-blue_sup" to="/signUp">
          {" "}
          sign up{" "}
        </Link>
      </p>
    </div>
  );
}
