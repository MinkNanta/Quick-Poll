import React, { useState } from "react";
import CreatePassword from "./CreatePassword";
import EmailVerify from "./EmailVerify";
import OtpVerify from "./OtpVerify";

const INPUTEMAIL = "inputemail";
const VERIFYOTP = "stepotp";
const SETPASSWORD = "setpassword";

export default function SignUpFrom() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const newUser = { userEmail, password };
  console.log(newUser);
  console.log(userEmail);
  console.log(password);

  // ------ useState , useAuth --------
  const [userStatus, setUserStatus] = useState(INPUTEMAIL);

  if (userStatus === INPUTEMAIL) {
    return (
      <EmailVerify
        setUserEmail={setUserEmail}
        setUserStatus={() => setUserStatus(VERIFYOTP)}
      />
    );
  }

  if (userStatus === VERIFYOTP) {
    return (
      <OtpVerify
        userEmail={userEmail}
        setUserStatus={() => setUserStatus(SETPASSWORD)}
      />
    );
  }

  if (userStatus === SETPASSWORD) {
    return <CreatePassword setPassword={setPassword} />;
  }
}
