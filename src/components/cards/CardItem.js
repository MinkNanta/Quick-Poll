import axios from "../../config/axios";
import React, { useEffect, useState } from "react";
import CardImg from "../common/CardImg";
import { useNavigate } from "react-router";
import { usePoll } from "../../contexts/PollContext";
import Skeleton from "../common/Skeleton";

export default function CardItem() {
  const navigate = useNavigate();

  // const [loading, setLoading] = useState(true);

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

  console.log(poll);

  return (
    <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 sm:gap-4">
      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        poll.slice(0, 20).map((el) => (
          <>
            <div
              key={el.id}
              className="space-y-2 cursor-pointer"
              onClick={() => navigate(`/poll/${el.id}`)}
            >
              <CardImg img={el?.pollImg} />
              <h6>{el.title}</h6>
            </div>
          </>
        ))
      )}
    </div>
  );
}
