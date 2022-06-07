import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../../../contexts/AuthContext";
import AuthServices from "../../authservices/AuthServices";
import Form from "../../from/Form";
import InputYup from "../../from/InputYup";
import SubmitButton from "../../from/SubmitButton";

export default function EmailVerify({ setUserStatus, setUserEmail }) {
  const { findByEmail } = useAuth();
  const [apiError, setApiError] = useState(false);
  // const [inputEmail, setInputEmail] = useState("");

  // ------ validator --------
  const isEmail = yup.object({
    email: yup.string().required().email(),
  });

  // ------ Handle Click --------
  const handleSubmitEmail = async ({ email }) => {
    try {
      const res = await findByEmail({ email });
      console.log(res);

      if (res !== email) {
        await setUserEmail(email);
        setUserStatus();
        setApiError(false);
      }
      setApiError(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="bigTitle">Create an account</h2>
      <Form schema={isEmail} className="flex flex-col gap-y-6">
        <InputYup
          apiError={apiError}
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <SubmitButton onClick={handleSubmitEmail}>Create Account</SubmitButton>
      </Form>
      <AuthServices />
      <h6 className="text-center">
        Already have an account?
        <Link className="text-blue_sup" to="/signIn">
          sign in
        </Link>
      </h6>
    </>
  );
}
