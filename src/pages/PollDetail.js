import React, { useEffect, useState } from "react";
import axios from "../config/axios";

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Tab from "../components/common/Tab";
import InputBigText from "../components/from/InputBigText";
import UploadPhoto from "../components/from/UploadPhoto";
import VoteQuestion from "../components/viewpoll/VoteQuestion";
import { usePoll } from "../contexts/PollContext";
import { timeSince } from "../sevices/dateFormat";
import SharePoll from "./feedback/SharePoll";
import Thankyou from "./feedback/Thankyou";

export default function PollDetail() {
  const { id } = useParams();
  const {
    error,
    pollTitle,
    setPollTitle,
    image,
    setImage,
    pollById,
    getPollById,
  } = usePoll();

  console.log(pollById);

  const [activePoll, setActivePoll] = useState(true);
  const [activeShare, setActiveShare] = useState(false);
  const [activeResults, setActiveResults] = useState(false);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        await getPollById(id);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCard();
  }, []);

  const handelDeletePoll = async () => {
    const res = await axios.delete(`/poll/${id}`);
  };

  return (
    <div className="mainContainer py-16">
      <div className="space-y-4">
        <div className="flex gap-2">
          <a href="/" className="text-t_support">
            Home
          </a>
          <p>></p>
          <Link to="/MyPoll" className="text-t_support">
            My poll
          </Link>
          <p>></p>
          <p className="text-t_main">Poll detail</p>
        </div>
      </div>

      <div className="bg-bg_sup px-6 flex rounded-xl gap-4 mt-9">
        <Tab
          title="Poll Detail"
          onClick={() => {
            setActivePoll(true);
            setActiveShare(false);
            setActiveResults(false);
          }}
          active={activePoll}
        />
        <Tab
          title="Results"
          onClick={() => {
            setActivePoll(false);
            setActiveShare(false);
            setActiveResults(true);
          }}
          active={activeResults}
        />
        <Tab
          title="Share"
          onClick={() => {
            setActivePoll(false);
            setActiveShare(true);
            setActiveResults(false);
          }}
          active={activeShare}
        />
        <button onClick={handelDeletePoll} className="link">
          Remove Poll
        </button>
      </div>

      <div className="flex justify-between pt-6">
        <h6 className="text-t_support">Poll Stats</h6>
        <button onClick={handelDeletePoll} className="link">
          Remove Poll
        </button>
      </div>

      <p className="text-t_link mt-6">Create {timeSince(pollById.createdAt)}</p>
      <div className="flex justify-between pt-4\2">
        <h2>{pollById.title}</h2>
      </div>

      {activePoll && (
        <div className="pt-14">
          <h3>{pollById.title}</h3>
        </div>
      )}
      {activeResults && <VoteQuestion />}
      {activeShare && <SharePoll />}
    </div>
  );
}

{
  /* <div className="flex gap-8 mt-4">
        <div className="grow bg-bg_sup px-6 rounded-xl p-8 text-center">
          <h4>Voted</h4>
          <h4>256</h4>
        </div>
        <div className="grow bg-bg_sup px-6 rounded-xl p-8 text-center">dd</div>
        <div className="grow bg-bg_sup px-6 rounded-xl p-8 text-center">dd</div>
      </div> */
}
