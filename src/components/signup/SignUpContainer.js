import React from "react";
import SignUpFrom from "./signupform/SignUpFrom";

export default function SignUpContainer() {
  return (
    <div className="max-w-sm mx-auto flex flex-col gap-y-6 pb-40">
      <SignUpFrom />
    </div>
  );
}
