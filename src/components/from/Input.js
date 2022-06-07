import React from "react";

export default function Input({
  key,
  name,
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <label className="block">
      <span className="inputLabel ">{label}</span>

      <input
        key={key}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mainInput"
      />
    </label>
  );
}
