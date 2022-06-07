import React from "react";
import { XIcon } from "@heroicons/react/solid";

export default function IconCircular({ onClick, absolute, ref }) {
  return (
    <div
      onClick={onClick}
      className={`${ref} rounded-full  bg-bg_sup p-0.5  top-4 right-4 hover:scale-110 ${
        absolute ? "absolute" : ""
      }`}
    >
      <XIcon className="w-4 text-t_support" />
    </div>
  );
}
