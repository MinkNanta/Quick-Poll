import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useAuth } from "../../../contexts/SignUpContext";
import AuthServices from "../../authservices/AuthServices";
import Form from "../../from/Form";
import InputYup from "../../from/InputYup";
import SubmitButton from "../../from/SubmitButton";

export default function OtpVerify({ setUserStatus, userEmail }) {
  // ------ validator --------
  const isOtp = yup.object({
    otp: yup.number().required(),
  });

  // ------ Handle Click --------
  const handleSubmitOtp = async (e) => {
    try {
      await setUserStatus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="bigTitle">Please enter the OTP to verify your account</h2>
      <div>
        <h6>A OTP has been sent to {userEmail}</h6>
        <button
          className="text-blue_sup"
          onClick={() => console.log("back to step1 ")}
        >
          Wrong email?
        </button>
      </div>

      <Form schema={isOtp} className="flex flex-col gap-y-6">
        <InputYup
          name="otp"
          type="otp"
          label="otp"
          placeholder="Enter your Otp"
        />
        <SubmitButton onClick={handleSubmitOtp}>Create Account</SubmitButton>
      </Form>
    </>
  );
}
