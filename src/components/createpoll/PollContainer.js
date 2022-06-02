import React from "react";
import CreatePoll from "../../pages/CreatePoll";
import PollTitle from "./question/PollTitle";
import QuestionContainer from "./question/QuestionContainer";

export default function PollContainer() {
  return (
    <div className="bg-bg_sup py-6 ">
      <div className="containerM">
        <PollTitle />
        <QuestionContainer />
      </div>
    </div>
  );
}
