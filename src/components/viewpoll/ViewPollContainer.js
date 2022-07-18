import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { usePoll } from "../../contexts/PollContext";
import { useAuth } from "../../contexts/AuthContext.js";
import { timeSince } from "../../sevices/dateFormat";

export default function ViewPollContainer() {
  const { pollById, getPollById } = usePoll();
  const { id } = useParams();
  const { user, userName } = useAuth();

  console.log(pollById);
  console.log(user);

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
  return (
    <div className="max-w-2xl space-y-4 text-center mx-auto py-32">
      <h6>
        Poll by {userName} • Create {timeSince(pollById.createdAt)} ago •{" "}
        {pollById.Questions?.length} Questions
      </h6>
      <h2>{pollById.title}</h2>
      {pollById?.pollImg && (
        <img
          alt="poll"
          src={pollById?.pollImg}
          className="h-60 mx-auto rounded-lg"
        />
      )}
      <Link
        className="primaryMd w-80 block mx-auto"
        to={`/poll/${pollById.id}/questions`}
      >
        Let's vote
      </Link>
    </div>
  );
}
