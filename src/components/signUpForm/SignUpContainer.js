import React from "react";
import SignUpFrom from "./SignUpFrom";
import SignUpContextProvider from "../../contexts/SignUpContext";

export default function SignUpContainer() {
  return (
    // <div className="max-w-sm mx-auto">
    //   <h2 className="text-center py-24">
    //     So glad you're here! create an account
    //   </h2>
    <SignUpContextProvider>
      <SignUpFrom />
    </SignUpContextProvider>
    // </div>
  );
}
