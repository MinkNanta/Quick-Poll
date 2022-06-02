import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../../../contexts/SignUpContext";
import AuthServices from "../../authservices/AuthServices";
import Form from "../../from/Form";
import InputYup from "../../from/InputYup";
import SubmitButton from "../../from/SubmitButton";

export default function EmailVerify({ setUserStatus, setUserEmail }) {
  // ------ validator --------
  const isEmail = yup.object({
    email: yup.string().required().email().default("mink@gmail.com"),
  });

  // ------ Handle Click --------
  const handleSubmitEmail = async ({ email }) => {
    try {
      await setUserEmail(email);
      setUserStatus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="bigTitle">So glad you're here! create an account</h2>
      <Form schema={isEmail} className="flex flex-col gap-y-6">
        <InputYup
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <SubmitButton onClick={handleSubmitEmail}>Create Account</SubmitButton>
      </Form>
      <AuthServices />
      <h6 className="text-center">
        Already have an account? <Link to="/signIn"> sign in </Link>
      </h6>
    </>
  );
}
