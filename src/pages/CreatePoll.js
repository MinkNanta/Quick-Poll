import React from "react";
import PollContainer from "../components/createpoll/PollContainer";
import CreatePollHeader from "../components/header/CreatePollHeader";

export default function CreatePoll() {
  return (
    <>
      <CreatePollHeader />
      <PollContainer />
    </>
  );
}
