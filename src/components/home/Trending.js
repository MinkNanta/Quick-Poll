import React from "react";
import card_img from "../../assets/img/Card.png";

function Trending() {
  return (
    <div className="py-6  flex flex-col gap-4 ">
      <h2 className="font-semibold text-2xl">Trending 🔥</h2>
      <div className="flex flex-row gap-4 ">
        <div>
          <img src={card_img} alt=""></img>
          <p>the card of poll</p>
        </div>
        <div>
          <img src={card_img} alt=""></img>
          <p>the card of poll</p>
        </div>
        <div>
          <img src={card_img} alt=""></img>
          <p>the card of poll</p>
        </div>
        <div>
          <img src={card_img} alt=""></img>
          <p>the card of poll</p>
        </div>
        <div>
          <img src={card_img} alt=""></img>
          <p>the card of poll</p>
        </div>
        <div>
          <img src={card_img} alt=""></img>
          <p>the card of poll</p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
