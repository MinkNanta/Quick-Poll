import axios from "../../config/axios";
import React, { useEffect, useState } from "react";
import CardImg from "../common/CardImg";
import { useNavigate } from "react-router";
import { usePoll } from "../../contexts/PollContext";

export default function CardItem() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const { getPoll, poll } = usePoll();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        await getPoll();
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCard();
  }, []);

  console.log(poll);

  return (
    <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 sm:gap-4">
      {poll.slice(0, 20).map((el) => (
        <div
          key={el.id}
          className="space-y-2 cursor-pointer"
          onClick={() => navigate(`/poll/${el.id}`)}
        >
          <CardImg img="https://designstripe-secure.imgix.net/scene-snapshots/f456d77b-0535-4037-a238-ee34a24f6112/1637682052802/gif?auto=compress&gif-q=60&fit=clip&h=400&s=be00fe5703c4dcc51ead1de2a5ebec53?bust=1654576015429" />
          <h6>{el.title}</h6>
        </div>
      ))}
    </div>
  );
}
