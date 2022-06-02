import { ClockIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import IconCircular from "../../common/IconCircular";
import Input from "../../from/Input";
import UploadPhoto from "../../from/UploadPhoto";

export default function QuestionOption({
  value,
  onChange,
  onChangeImg,
  imgValue,
  onClose,
}) {
  const [thumbnail, setThumbnail] = useState(null);
  const [optionOne, setOptionOne] = useState("");

  return (
    <div>
      <UploadPhoto
        detail="SVG, PNG, JPG or GIF (MAX. 400x400px)"
        photo={imgValue}
        onClose={onClose}
        onChange={onChangeImg}
      />
      <Input placeholder="test" value={value} onChange={onChange} />
    </div>
  );
}
