import React, { useState } from "react";
import { TrashIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function DropDown() {
  const [open, setOpen] = useState();
  const [time, setTime] = useState("30s");
  return (
    <div className="flex place-item-center space-x-3">
      <p>Time left:</p>
      <div class="relative inline-block text-left">
        <button
          type="button"
          class="flex pr-3 pl-5 text-base text-t_support focus:outline-none bg-main rounded-full w-24 text-right place-content-center"
          aria-expanded="true"
          aria-haspopup="true"
          id="menu-button"
          onClick={() => setOpen((p) => !p)}
        >
          <p className="place-self-center ">{time}</p>

          <ChevronDownIcon className="text-t_support w-8 p-2 " />
        </button>

        {open ? (
          <div
            class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-bg_main focus:outline-none w-full "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <ul>
                <li
                  class="text-t_support text-base px-5 hover:bg-main py-1"
                  tabindex="-1"
                  id="30s"
                  onClick={(e) => setTime(e.target.id)}
                >
                  30s
                </li>
                <li
                  class="text-t_support text-base px-5 hover:bg-main py-1"
                  tabindex="-1"
                  id="60s"
                  onClick={(e) => setTime(e.target.id)}
                >
                  60s
                </li>
                <li
                  class="text-t_support text-base px-5 hover:bg-main py-1"
                  tabindex="-1"
                  id="120s"
                  onClick={(e) => setTime(e.target.id)}
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
