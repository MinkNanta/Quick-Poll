import React, { useRef, useState } from "react";
import { PhotographIcon } from "@heroicons/react/outline";
import IconCircular from "../common/IconCircular";

export default function UploadPhotoIcon({
  detail,
  value,
  onChange,
  onClose,
  className,
}) {
  const uploadEL = useRef();
  console.log(value);

  return (
    <>
      <div className=" py-4 flex justify-center items-center w-full ">
        {value && (
          <div className="relative text-t_link flex flex-col justify-center items-center w-full cursor-pointer overflow-hidden rounded-lg hover:border hover:border-main h-96">
            <IconCircular onClick={onClose} absolute={true} />

            <img
              className="object-cover h-full w-full"
              src={URL.createObjectURL(value)}
              alt="thumbnail"
            />
          </div>
        )}

        <label ref={uploadEL} className={className}>
          <PhotographIcon className="w-6 text-t_label" />
          <input type="file" className="hidden" onChange={onChange} />
        </label>
      </div>
    </>
  );
}
