import React from "react";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useAuth } from "../../../contexts/SignUpContext";
import Form from "../../from/Form";
import InputYup from "../../from/InputYup";
import SubmitButton from "../../from/SubmitButton";

export default function CreatePassword({ setPassword }) {
  // ------ Auth user --------
  const { user, setUser } = useAuth();

  // ------ navigate --------
  const navigate = useNavigate();

  // ------ validator --------

  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password"), null], "Passwords don't match."),
  });

  // ------ Handle Click --------

  const handleSubmitPassword = async ({ password }) => {
    try {
      await setPassword(password);
      setUser(true);
      navigate("/?firstTime=true");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="bigTitle">Create your password</h2>
      <div>
        <h6>your password must be contain</h6>
        <p>At least 8 characters</p>
        <p>At least one uppercase</p>
        <p>At least one number </p>
        <p>At least one special case character </p>
      </div>

      <Form schema={validationSchema} className="flex flex-col gap-y-6">
        <InputYup
          name="password"
          type="password"
          label="password"
          placeholder="Enter your password"
        />
        <InputYup
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Retype your password"
        />
        <SubmitButton onClick={handleSubmitPassword}>
          Create Account
        </SubmitButton>
      </Form>
    </>
  );
}
