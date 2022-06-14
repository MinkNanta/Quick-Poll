import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePoll } from "../../contexts/PollContext";
import { useParams } from "react-router";
import { useVote } from "../../contexts/VoteContext";
import { useAuth } from "../../contexts/AuthContext";
import Modal from "../common/Modal";
import SignInContainer from "../signin/SignInContainer";
import SignInFrom from "../signin/signinform/SignInFrom";
import SignInFromForModal from "../signin/signinform/SignInFromForModal";
import Votebody from "./Votebody";

export default function VoteQuestion() {
  const [ques, setQues] = useState(null);
  const [open, setOpen] = useState(false);
  const [fetch, setFetch] = useState(false);

  const { getPollById } = usePoll();
  const { vote, createVote, setVote, getVote } = useVote();
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await getPollById(id);
        setQues(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCard();
  }, [fetch]);

  const handelClickVote = async (ansId, questionId, Votes) => {
    try {
      const votes = await getVote(questionId);

      if (!user) {
        setOpen(true);
        console.log("not auth");
      }

      const voted = await votes.map((el) => el.userId === user.id);
      console.log(user.id);
      console.log(voted);
      console.log(voted.indexOf(true));

      if (voted.indexOf(true) >= 0) {
        console.log("you already voted");
        return;
      } else {
        const res = await createVote({ id, ansId, questionId });
        setFetch((p) => !p);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {open && (
        <Modal
          div={<SignInFromForModal setOpen={setOpen} />}
          open={open}
          title=""
          detail=""
          icon=""
          button=""
          onClose={() => {
            setOpen(false);
          }}
        />
      )}
      <div className={`bg-t_link h-1 sticky top-[80px]`}></div>
      <h6 className="text-t_link max-w-2xl mx-auto pt-6 pb-4">{ques?.title}</h6>

      <div className="max-w-2xl mx-auto space-y-10 mb-44">
        {ques?.Questions?.map((el, idx) => (
          <div
            key={el.id}
            className="bg-bg_main p-8 rounded-2xl shadow-2xl border border-main"
          >
            <div className="space-y-4">
              <div className="flex gap-2  items-center justify-between text-t_main ">
                <h3>{el.title}</h3>

                <div className="flex gap-2  items-center ">
                  <h5 className="flex px-3 text-base text-t_label focus:outline-none bg-bg_sup rounded-full text-right place-content-center p-2 w-16">
                    {idx + 1}/{ques.Questions?.length}
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
                    <button
                      className="border-main bg-bg_sup py-5 px-6 rounded-3xl hover:bg-buttonHover text-t_main text-left w-full
                      "
                      onClick={() => handelClickVote(ans.id, el.id, ans.Votes)}
                    >
                      {ans.title}
                    </button>

                    <button className="border-main bg-bg_sup py-5 px-6 rounded-3xl hover:bg-buttonHover text-t_main text-left w-full ">
                      {ans.Votes?.map((vote, idx) => vote.userId)}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
