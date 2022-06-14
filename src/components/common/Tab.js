import React from "react";

export default function Tab({ title, value, onClick, active }) {
  return (
    <div
      className={`py-4  ${
        active ? "border-b-2 border-b-blue_sup" : ""
      } text-center flex space-x-2 px-2 cursor-pointer`}
      onClick={onClick}
    >
      <button className="link text-t_main">{title}</button>
      <button className="link text-blue_sup">{value}</button>
    </div>
  );
}
