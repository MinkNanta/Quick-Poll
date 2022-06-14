import React from "react";
import { useNavigate } from "react-router";
import img from "../../assets/upgrade.png";

function Banner({ title, span, detail, button }) {
  // ------ navigate --------
  const navigate = useNavigate();
  return (
    <div className="bg-bg_sup rounded-2xl p-4 flex px-9 relative">
      <div className="p-6">
        <h3 className="font-semibold text-t_main">
          {title}
          <br />
          <span className="text-t_link">{span}</span>
        </h3>
        <h6 className="pt-2">{detail}</h6>
        {button}
      </div>
      <div className=" absolute -bottom-8 right-16">
        <img src={img} alt="pool-poll"></img>
      </div>
    </div>
  );
}

export default Banner;
