import React from "react";

export default function InputBigText({
  label,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <>
      {error && <p className="text-danger">*Please enter poll title</p>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full py-3 text-5xl bg-bg_sup focus:outline-none"
      />
    </>
  );
}
