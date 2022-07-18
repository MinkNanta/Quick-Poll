import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import card_img from "../../assets/img/Card.png";
import { usePoll } from "../../contexts/PollContext";
import CardImg from "../common/CardImg";

function Trending() {
  const navigate = useNavigate();

  const { getPoll, poll, loading } = usePoll();
  useEffect(() => {
    const fetch = async () => {
      try {
        await getPoll();
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  return (
    <div className="py-6  flex flex-col gap-4 ">
      <h2 className="font-semibold text-2xl">Trending 🔥</h2>
      <div className="flex flex-row gap-4 ">
        {poll.slice(0, 6).map((el) => (
          <div className="w-96">
            <div
              key={`home${el.id}`}
              className="space-y-2 cursor-pointer"
              onClick={() => navigate(`/poll/${el.id}`)}
            >
              <CardImg img={el?.pollImg} />
              <h6>{el.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
