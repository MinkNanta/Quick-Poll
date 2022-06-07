import React, { useState } from "react";
import { TrashIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function DropDown({ name, value, onClickTime }) {
  const [open, setOpen] = useState();
  const [time, setTime] = useState("30s");
  return (
    <div className="flex place-item-center space-x-3">
      <p>Time left:</p>
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="flex pr-3 pl-5 text-base text-t_support focus:outline-none bg-main rounded-full w-24 text-right place-content-center"
          id="menu-button"
          onClick={() => setOpen((p) => !p)}
        >
          <p className="place-self-center ">{time}</p>

          <ChevronDownIcon className="text-t_support w-8 p-2 " />
        </button>

        {open ? (
          <div
            className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-bg_main focus:outline-none w-full "
            role="menu"
          >
            <div className="py-1" role="none">
              <ul>
                <li
                  className="text-t_support text-base px-5 hover:bg-main py-1"
                  value="30s"
                  onClick={onClickTime}
                >
                  30s
                </li>
                <li
                  className="text-t_support text-base px-5 hover:bg-main py-1"
                  id="60s"
                  onClick={onClickTime}
                >
                  60s
                </li>
                <li
                  className="text-t_support text-base px-5 hover:bg-main py-1"
                  id="120s"
                  onClick={onClickTime}
                >
                  120s
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
