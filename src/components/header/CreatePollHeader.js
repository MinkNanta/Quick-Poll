import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { usePoll } from "../../contexts/PollContext";

export default function CreatePollHeader() {
  const navigate = useNavigate();
  const { handleSubmitPoll } = usePoll();

  return (
    <div className="headerSticky">
      <div className="headerContainer">
        <div className="my-auto">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div></div>
        <div className="space-x-8 my-auto text-right">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <p>Cancel</p>
          </button>
          <button className="primarySmall" onClick={handleSubmitPoll}>
            Save and Share
          </button>
        </div>
      </div>
    </div>
  );
}
