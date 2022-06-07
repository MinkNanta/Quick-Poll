import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";
import CardImg from "../components/common/CardImg";
import { usePoll } from "../contexts/PollContext";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { timeSince } from "/Users/nantanitlertwittayarat/Documents/CodeCamp11/Poll-Project/quick-poll/src/sevices/dateFormat.js";

export default function ViewPoll() {
  const { pollById, getPollById } = usePoll();
  const { id } = useParams();

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
  console.log(pollById);
  return (
    <div className="max-w-2xl space-y-4 text-center mx-auto p-12">
      <h6>What do you think about?</h6>
      <h2>{pollById.title}</h2>
      <img
        alt="poll"
        src="https://images.dog.ceo/breeds/terrier-dandie/n02096437_2783.jpg"
        className="h-60 mx-auto rounded-lg"
      />
      <button className="primaryMd w-80">Let's vote</button>
      <p>
        Ui design • Create {timeSince(pollById.createdAt)} •{" "}
        {pollById.Questions.length} Questions
      </p>
    </div>
  );
}
