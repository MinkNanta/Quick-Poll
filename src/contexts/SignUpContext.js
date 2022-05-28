import React, { createContext, useState } from "react";

const SignUpContext = createContext();

function SignUpContextProvider(children) {
  const [userStatus, setUserStatus] = useState("STEP1");

  return (
    <SignUpContext.Provider value={{ userStatus, setUserStatus }}>
      {children}
    </SignUpContext.Provider>
  );
}

export default SignUpContextProvider;
export { SignUpContext };
