import React, { useEffect, useState } from "react";
import validator from "validator";

export default function SignUpFrom() {
  const [userStatus, setUserStatus] = useState("STEP1");
  const [email, setEmail] = useState("");

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      if (!validator.isEmail(email)) {
        return console.log("not email");
      }
      await setUserStatus("STEP2");
      console.log(userStatus);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [userStatus]);

  if (userStatus === "STEP1") {
    return (
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmitSignUp}>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            label="Email"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </label>
        <button type="submit" className="primarySmall">
          Create Account
        </button>

        <div className="flex items-center gap-2">
          <div className="divide align-center"></div>
          <div>
            <h6>Or</h6>
          </div>
          <div className="divide align-center"></div>
        </div>

        <button className="primarySmall">Signup with Google</button>
        <button className="primarySmall">Signup with Facebook</button>
        <button className="primarySmall">
          Already have an account? sign in
        </button>
      </form>
    );
  }

  if (userStatus === "STEP2") {
    return (
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmitSignUp}>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Otp
          </span>
          <input
            label="Email"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </label>
        <button type="submit" className="primarySmall">
          Create Account
        </button>

        <div className="flex items-center gap-2">
          <div className="divide align-center"></div>
          <div>
            <h6>Or</h6>
          </div>
          <div className="divide align-center"></div>
        </div>

        <button className="primarySmall">Signup with Google</button>
        <button className="primarySmall">Signup with Facebook</button>
        <button className="primarySmall">
          Already have an account? sign in
        </button>
      </form>
    );
  }
}
