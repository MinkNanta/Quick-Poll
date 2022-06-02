import React from "react";

export default function InputBigText({ label, value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full py-3 text-3xl bg-bg_sup focus:outline-none"
    />
  );
}
