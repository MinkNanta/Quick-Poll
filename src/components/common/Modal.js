import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import IconCircular from "./IconCircular";
import { useNavigate } from "react-router";

export default function Modal({ title, detail, icon, button, onClose, open }) {
  return (
    <Transition.Root show={open}>
      <Dialog as="div" className="z-10" onClose={onClose}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-t_label" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 flex">
          <div className="bg-bg_main rounded-xl shadow-2xl  max-w-lg mx-auto self-center grow p-2">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="relative text-center p-12 space-y-4">
                <IconCircular onClick={onClose} absolute="true" />
                <h2>{icon}</h2>
                <h2>{title}</h2>
                <p>{detail}</p>
                {button}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// onClick={() => setOpen(false)}
