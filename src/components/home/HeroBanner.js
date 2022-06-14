import React from "react";
import { useNavigate } from "react-router";
import img from "../../assets/img/Hero.png";

function HeroBanner() {
  // ------ navigate --------
  const navigate = useNavigate();
  return (
    <div className="py-12 ">
      <div className="bannerContainer relative ">
        <div className="p-4 px-9">
          <h1 className=" font-semibold">
            The best way to prove
            <br />
            <span className="text-t_link">your design ideas</span>
          </h1>
          <h6 className="pt-2 pb-4">
            Easily surveys help your brand driving engagement
          </h6>
          <button
            className="primaryMd"
            onClick={() => navigate("/poll/create")}
          >
            Make A Quick Poll
          </button>
        </div>
        <div className="mx-auto p-4 absolute -bottom-4 right-0">
          <img src={img} alt="pool-poll" className=""></img>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
