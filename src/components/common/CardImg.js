import React from "react";

export default function CardImg({ card }) {
  //   console.log(card);
  const { download_url, id, author } = card;
  return (
    <img
      key={id}
      src={download_url}
      className="rounded-2xl h-56 w-full sm:h-40 "
      //   width="200"
      //   height="212"
      alt={author}
    />
  );
}
