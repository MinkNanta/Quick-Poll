import React from "react";
import Skeleton from "./Skeleton";

export default function CardImg({ img, loading }) {
  //   console.log(card);

  return (
    <>
      {loading && <Skeleton />}
      <img
        src={img}
        className="rounded-2xl object-cover w-full h-56"
        alt="poll"
      />
    </>
  );
}
