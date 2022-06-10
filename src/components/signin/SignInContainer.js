import React from "react";
import SignInFrom from "./signinform/SignInFrom";

export default function SignInContainer() {
  return (
    <div className="max-w-sm mx-auto flex flex-col gap-y-6 box pb-40">
      <SignInFrom />
    </div>
  );
}
