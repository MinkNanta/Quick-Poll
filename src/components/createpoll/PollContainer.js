import React, { useState } from "react";
import { usePoll } from "../../contexts/PollContext";
import CreatePollHeader from "../header/CreatePollHeader";
import PollTitle from "./question/PollTitle";
import QuestionContainer from "./question/QuestionContainer";

export default function PollContainer() {
  return (
    <>
      <CreatePollHeader />
      <div className="bg-bg_sup py-6 ">
        <div className="containerM">
          <PollTitle />
          <QuestionContainer />
        </div>
      </div>
    </>
  );
}
