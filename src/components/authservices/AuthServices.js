import React, { useState } from "react";
import Tootip from "../common/Tootip";

export default function AuthServices() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="divide align-center"></div>
        <div>
          <h6>Or</h6>
        </div>
        <div className="divide align-center"></div>
      </div>
      <div className="group relative">
        <button className="primaryMd w-full">Signup with Google</button>
        <Tootip title="Soon!" />
      </div>
      <div className="group relative">
        <button className="primaryMd w-full">Signup with Facebook</button>
        <Tootip title="Soon!" />
      </div>
    </>
  );
}
