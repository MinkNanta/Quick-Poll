import React from "react";
import Input from "../../from/Input";
import UploadPhoto from "../../from/UploadPhoto";

export default function Option({
  placeholder,
  value,
  onChange,
  onChangeImg,
  onClose,
}) {
  return (
    <div>
      <Input placeholder="Option" value={value} onChange={onChange} />

      <UploadPhoto
        detail="SVG, PNG, JPG or GIF (MAX. 400x400px)"
        //   scr={image1}
        classNameInput="h-40"
        onClose={onClose}
        onChange={onChangeImg}
      />
    </div>
  );
}
