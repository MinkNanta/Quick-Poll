import React from "react";

export default function CardImg({ img }) {
  return (
    <>
      <img
        src={
          img
            ? img
            : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png"
        }
        className="rounded-2xl object-cover w-full h-56"
        alt="poll"
      />
    </>
  );
}
