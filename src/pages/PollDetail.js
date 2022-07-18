import React, { useEffect, useState } from "react";
import axios from "../config/axios";

import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Tab from "../components/common/Tab";
import InputBigText from "../components/from/InputBigText";
import UploadPhoto from "../components/from/UploadPhoto";
import VoteQuestion from "../components/viewpoll/VoteQuestion";
import { usePoll } from "../contexts/PollContext";
import { timeSince } from "../sevices/dateFormat";
import SharePoll from "./feedback/SharePoll";
import Thankyou from "./feedback/Thankyou";
import { useAuth } from "../contexts/AuthContext";

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

  const [fetch, setFetch] = useState(false);
  const [activeShare, setActiveShare] = useState(false);
  const [activeResults, setActiveResults] = useState(false);
  const { user } = useAuth();
  const navigator = useNavigate();

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
    navigator("/MyPoll");
    setFetch((p) => !p);
  };

  return (
    <div className="mainContainer py-8">
      <div className="containerM space-y-4">
        <div className="flex gap-2">
          <Link to="/" className="text-t_support">
            Home
          </Link>
          <p>></p>
          <Link to="/MyPoll" className="text-t_support">
            My poll
          </Link>
          <p>></p>
          <p className="text-t_main">Poll detail</p>
        </div>
      </div>
      <div className="containerM space-y-6">
        <div>
          <div className="flex justify-between pt-6 items-center ">
            <h2>{pollById.title}</h2>
            {user.id === pollById.userId ? (
              <button onClick={handelDeletePoll} className="link">
                Remove Poll
              </button>
            ) : (
              ""
            )}
          </div>
          <p className="pt-2">
            Create at {timeSince(pollById.createdAt)} ago •{" "}
            {pollById.Questions?.length} Questions
          </p>
        </div>

        <div className="h-88 overflow-clip rounded-xl">
          <img
            src={pollById.pollImg}
            alt="cover poll"
            className="object-cover w-full h-full"
          />
        </div>

        {/* <div className="max-w-2xl mx-auto space-y-10 mb-44"> */}
        {pollById?.Questions?.map((el, idx) => (
          <div
            key={el.id}
            className="bg-bg_main p-8 rounded-2xl shadow-2xl border border-main"
          >
            <div className="space-y-4">
              <div className="flex gap-2  items-center justify-between text-t_main ">
                <h3>{el.title}</h3>

                <div className="flex gap-2  items-center ">
                  <h5 className="flex px-3 text-base text-t_label focus:outline-none bg-bg_sup rounded-full text-right place-content-center p-2 w-16">
                    {idx + 1}/{pollById.Questions?.length}
                  </h5>
                </div>
              </div>

              {el.questionPic && (
                <div className="overflow-hidden rounded-lg  h-96">
                  <img
                    src={el.questionPic}
                    alt="question"
                    className="object-cover h-full w-full"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 pt-4 ">
                {el?.Answers.map((ans) => (
                  <div key={ans.id}>
                    <div
                      className="border-main bg-bg_sup py-5 px-6 rounded-3xl text-t_main text-left w-full mb-2
                      "
                    >
                      {ans.title}
                    </div>

                    <div>
                      {/* <div className="bg-main h-3 w-full mt-4 rounded-3xl">
                        <div
                          className={`bg-success h-3 w-[${
                            ans.Votes?.length / 100
                          }] mt-4 rounded-3xl`}
                        ></div>
                      </div> */}
                      <p className="ml-2">Voted: {ans.Votes?.length}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
