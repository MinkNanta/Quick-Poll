import React from "react";

export default function Input({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-bg_sup w-full border-none px-4 py-4 text-t_support rounded-2xl border border-main focus:outline-1 focus:text-t_main focus:outline-main autofill"
      />
    </label>
  );
}
