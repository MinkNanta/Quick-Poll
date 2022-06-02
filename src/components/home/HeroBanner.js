import React from "react";
import { useNavigate } from "react-router";
import img from "../../assets/img/Hero.png";

function HeroBanner() {
  // ------ navigate --------
  const navigate = useNavigate();
  return (
    <div className="py-12 ">
      <div className="bannerContainer ">
        <div className="p-12">
          <h1 className="text-5xl font-semibold">
            The best way to prove
            <br />
            <span className="text-t_link">your design ideas</span>
          </h1>
          <h6 className="pt-2 pb-4">
            Easily surveys help your brand driving engagement
          </h6>
          <button
            className="primarySmall"
            onClick={() => navigate("/createPoll")}
          >
            Make A Quick Vote
          </button>
        </div>
        <div className="mx-auto p-4">
          <img src={img} alt="pool-poll"></img>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
