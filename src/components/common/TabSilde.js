import React from "react";

export default function TabSilde({
  title,
  value,
  onClick,
  active,
  activeClass,
}) {
  return (
    <div
      className={`py-4  ${
        active ? "bg-buttonHover rounded-3xl  text-t_link" : ""
      } text-center flex space-x-2 px-4 cursor-pointer place-items-center`}
      onClick={onClick}
    >
      {value}
      <button className="">{title}</button>
    </div>
  );
}
