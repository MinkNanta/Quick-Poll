import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../components/common/Banner";

import CardImg from "../components/common/CardImg";
import Skeleton from "../components/common/Skeleton";
import Tab from "../components/common/Tab";
import { useAuth } from "../contexts/AuthContext";
import { usePoll } from "../contexts/PollContext";
import { useVote } from "../contexts/VoteContext";

export default function MyPoll() {
  const [activeCreate, setActiveCreate] = useState(true);
  const [activeVoted, setActiveVoted] = useState(false);
  const navigate = useNavigate();
  const { getPoll, poll, loading } = usePoll();
  const [myPoll, setMyPoll] = useState([]);
  const [myVote, setMyVote] = useState([]);
  const { user } = useAuth();
  const { getVoteById } = useVote();

  useEffect(() => {
    const fetch = async () => {
      try {
        await getPoll();
        const res = await poll.filter((el) => el.userId === user.id);
        setMyPoll(res);

        const resVote = await getVoteById(user.id);
        setMyVote(resVote);
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);

  console.log("myVote");
  console.log(myVote);

  return (
    <div className="mainContainer py-8">
      <div className="space-y-4">
        <div className="flex gap-2">
          <a href="/" className="text-t_support">
            Home
          </a>
          <p>></p>
          <p className="text-t_main">My poll</p>
        </div>
        <h3>My Poll</h3>
      </div>

      <div className="bg-bg_sup px-6 flex rounded-xl gap-4 mt-9">
        <Tab
          title="Create"
          value={myPoll?.length}
          onClick={() => {
            setActiveCreate(true);
            setActiveVoted(false);
          }}
          active={activeCreate}
        />
        <Tab
          title="Voted"
          value={myVote?.length}
          onClick={() => {
            setActiveCreate(false);
            setActiveVoted(true);
          }}
          active={activeVoted}
        />
      </div>

      {activeCreate && (
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 sm:gap-4 pt-10">
          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : myPoll.length > 0 ? (
            myPoll.slice(0, 20).map((el) => (
              <div
                key={el.id}
                className="space-y-2 cursor-pointer"
                onClick={() => navigate(`/pollDetail/${el.id}`)}
              >
                <CardImg img={el?.pollImg} />
                <h6>{el.title}</h6>
              </div>
            ))
          ) : (
            <div className="py-20 w-full col-span-12 text-center space-y-3">
              <h3>Start building your poll!</h3>
              <p className="text-t_support">
                Choose category > Write your questions > Share your poll
              </p>
              <div>
                <Link className="text-t_link" to="/poll/create">
                  Make A Quick Vote
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {activeVoted && (
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-2 sm:gap-4 pt-10">
          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : myVote.length > 0 ? (
            myVote.slice(0, 20).map((el) => (
              <div
                key={el.id}
                className="space-y-2 cursor-pointer"
                onClick={() => navigate(`/pollDetail/${el.id}`)}
              >
                <CardImg img={el?.pollImg} />
                <h6>{el.title}</h6>
              </div>
            ))
          ) : (
            <div className="py-20 w-full col-span-12 text-center space-y-3">
              <h3>Your don't have any Voted</h3>
              <p className="text-t_support">Let's vote some poll</p>
              <div>
                <Link className="text-t_link" to="/">
                  Explore poll
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="my-24">
        <Banner
          title="Upgrade your plan"
          span=""
          detail="or unlimited polls, and customizable team libraries."
          button=""
        />
      </div>
    </div>
  );
}
