import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function CreatePollHeader() {
  // ------ navigate --------
  const navigate = useNavigate();

  return (
    <div className="boxShadow">
      <div className="headerContainer">
        <div className="menuList flex-wrap cursor-pointer">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        <div className="space-x-6">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <p>Cancel</p>
          </button>
          <Link type="button" className="primarySmall" to="/signup">
            Save and Share
          </Link>
        </div>
      </div>
    </div>
  );
}
