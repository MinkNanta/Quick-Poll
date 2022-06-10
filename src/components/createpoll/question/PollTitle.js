import { usePoll } from "../../../contexts/PollContext";
import React, { useState } from "react";

import InputBigText from "../../from/InputBigText";
import UploadPhoto from "../../from/UploadPhoto";

export default function PollTitle() {
  const { error, pollTitle, setPollTitle, image, setImage } = usePoll();

  // const handleSubmitPhoto = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  //   if (!pollTitle) {
  //     return;
  //   }
  //   console.log(pollTitle, image);
  //   createPoll(pollTitle, image);
  // };

  return (
    <div className="space-y-3">
      <InputBigText
        placeholder="What is poll about?"
        value={pollTitle}
        onChange={(e) => setPollTitle(e.target.value)}
        error={error}
      />
      <button className="link">+ Add Category</button>
      <UploadPhoto
        value={image}
        classNameInput="h-64"
        detail="SVG, PNG, JPG or GIF (MAX. 800x400px)"
        onClose={() => {
          setImage(null);
        }}
        onChange={(e) => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}
