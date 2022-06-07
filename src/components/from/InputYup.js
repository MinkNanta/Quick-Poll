import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function InputYup({ name, type, placeholder, label, apiError }) {
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
                <span className="inputLabel ">{label}</span>
                <input
                  type={type}
                  name={name}
                  onChange={onChange}
                  value={value}
                  placeholder={placeholder}
                  className="mainInput"
                />
              </label>
              {errors[name] && (
                <p className="pt-1 text-[14px] leading-5 text-danger">
                  {errors[name].message}
                </p>
              )}
              {apiError && (
                <p className="pt-1 text-[14px] leading-5 text-danger">
                  Email is already exists
                </p>
              )}
              {/* {errors[name] ? (
                <p className="pt-1 text-[14px] leading-5 text-danger">
                  {errors[name].message}
                </p>
              ) : { apiError } ? (
                <p className="pt-1 text-[14px] leading-5 text-danger">
                  Email is already exists
                </p>
              ) : (
                <></>
              )} */}
            </div>
          );
        }}
        name={name}
      />
    </>
  );
}

export default InputYup;
