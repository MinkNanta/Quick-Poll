import React, { useRef, useState } from "react";
import { UploadIcon } from "@heroicons/react/solid";
import IconCircular from "../common/IconCircular";

export default function UploadPhoto({
  detail,
  photo,
  onChange,
  handleChange,
  onClose,
}) {
  const uploadEL = useRef();

  console.log("ggg");
  console.log(photo);

  return (
    <>
      <div className=" py-4 flex justify-center items-center w-full ">
        {photo ? (
          <div className="relative text-t_link flex flex-col justify-center items-center w-full h-80 cursor-pointer overflow-hidden rounded-lg hover:border hover:border-main ">
            <IconCircular onClick={onClose} absolute={true} />

            {/* <img src={photo} /> */}
            <img
              className="object-cover h-full w-full"
              src={photo ? URL.createObjectURL(photo) : ""}
              alt="thumbnail"
            />
            {/* <img
              className="object-cover h-full w-full"
              src={photo ? URL.createObjectURL(photo) : ""}
              alt="thumbnail"
            /> */}
          </div>
        ) : (
          <label
            ref={uploadEL}
            className="flex flex-col justify-center items-center w-full h-80 bg-bg_main rounded-lg border border-t_label border-dashed cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-y-2">
              <UploadIcon className="w-10 text-t_label" />
              <div className="text-center">
                <p>
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs ">{detail}</p>
              </div>
            </div>
            <input type="file" className="hidden" onChange={onChange} />
          </label>
        )}
      </div>
    </>
  );
}
