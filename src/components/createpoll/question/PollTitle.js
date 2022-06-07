import React, { useState } from "react";
import InputBigText from "../../from/InputBigText";
import UploadPhoto from "../../from/UploadPhoto";

export default function PollTitle({ value, onChange, error }) {
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <div className="space-y-3">
      <InputBigText
        placeholder="What is poll about?"
        value={value}
        onChange={onChange}
        error={error}
      />
      <button className="link">+ Add Category</button>
      <UploadPhoto
        scr={thumbnail}
        classNameInput="h-64"
        detail="SVG, PNG, JPG or GIF (MAX. 800x400px)"
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
