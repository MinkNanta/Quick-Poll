import React from "react";
import { useFormContext } from "react-hook-form";

const SubmitButton = ({ onClick, children, disabled = false, style }) => {
  const { handleSubmit, reset } = useFormContext();
  return (
    <button
      // disabled={disabled}
      className="primarySmall"
      onClick={handleSubmit((data) => {
        onClick(data, reset);
      })}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
