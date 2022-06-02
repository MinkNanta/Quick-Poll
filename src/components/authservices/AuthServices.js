import React from "react";

export default function AuthServices() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="divide align-center"></div>
        <div>
          <h6>Or</h6>
        </div>
        <div className="divide align-center"></div>
      </div>

      <button className="primarySmall">Signup with Google</button>
      <button className="primarySmall">Signup with Facebook</button>
    </>
  );
}
