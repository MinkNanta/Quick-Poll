import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function InputYup({ name, type, placeholder, label }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        defaultValue={""}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div>
              <label htmlFor={name} className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  {label}
                </span>
                <input
                  type={type}
                  name={name}
                  onChange={onChange}
                  value={value}
                  placeholder={placeholder}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              {errors[name] && (
                <p className="pt-1 text-[14px] leading-5 text-danger">
                  {errors[name].message}
                </p>
              )}
            </div>
          );
        }}
        name={name}
      />
    </>
  );
}

export default InputYup;
