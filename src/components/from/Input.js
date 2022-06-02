import React from "react";

export default function Input({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
      />
    </label>
  );
}
