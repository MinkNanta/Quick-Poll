import React, { useState } from "react";
import InputBigText from "../../from/InputBigText";
import UploadPhoto from "../../from/UploadPhoto";

export default function PollTitle() {
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <div>
      <InputBigText placeholder="What is poll about?" />
      <button className="link">+ Add Category</button>
      <UploadPhoto
        detail="SVG, PNG, JPG or GIF (MAX. 800x400px)"
        photo={thumbnail}
        onClose={() => {
          setThumbnail(null);
        }}
        onChange={(e) => {
          if (e.target.files[0]) {
            setThumbnail(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}
