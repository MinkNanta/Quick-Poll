import React, { useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../../components/common/Modal";

export default function Thankyou() {
  const [open, setOpen] = useState(true);
  const navigator = useNavigate();

  return (
    <Modal
      detail="You will able to add an avatar and set other options in your
  account setting."
      title="Account now created!"
      icon="🎉🎊✨"
      button={
        <button className="primaryMd" onClick={() => navigator("/profile")}>
          See my profile
        </button>
      }
      onClose={() => {
        setOpen(false);
        navigator("/");
      }}
      open={open}
    />
  );
}
