import React, { useRef, useState } from "react";
import { UploadIcon } from "@heroicons/react/outline";
import IconCircular from "../common/IconCircular";

export default function UploadPhoto({
  detail,
  scr,
  onChange,
  onClose,
  classNameInput,
}) {
  const uploadEL = useRef();

  return (
    <>
      <div className=" py-4 flex justify-center items-center w-full ">
        {scr ? (
          <div className="relative text-t_link flex flex-col justify-center items-center w-full cursor-pointer overflow-hidden rounded-lg hover:border hover:border-main h-96">
            <IconCircular onClick={onClose} absolute={true} />

            <img
              className="object-cover h-full w-full"
              src={scr ? URL.createObjectURL(scr) : ""}
              alt="thumbnail"
            />
          </div>
        ) : (
          <label
            ref={uploadEL}
            className={`flex flex-col justify-center items-center w-full bg-bg_main rounded-lg border border-t_label border-dashed cursor-pointer ${classNameInput}`}
          >
            <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-y-2">
              <UploadIcon className="w-6 text-t_label" />
              <div className="text-center text-t_label">
                <p className="text-t_label">Click to upload</p>
                <p className="text-xs text-t_label">{detail}</p>
              </div>
            </div>
            <input type="file" className="hidden" onChange={onChange} />
          </label>
        )}
      </div>
    </>
  );
}
