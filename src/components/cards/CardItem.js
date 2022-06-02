import axios from "axios";
import React, { useEffect, useState } from "react";
import CardImg from "../common/CardImg";

export default function CardItem() {
  const [loading, setLoading] = useState(true);

  const [card, setCard] = useState([]);
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        setCard(res.data);
        setLoading(false);
      } catch (error) {
        console.log("CardItem " + error.message);
      }
    };
    fetchCard();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 sm:gap-4">
      {card.slice(0, 20).map((el) => (
        <div className="space-y-2">
          <CardImg loading={loading} key={el.id} card={el} />
          <h6>{el.author}</h6>
        </div>
      ))}
    </div>
  );
}
