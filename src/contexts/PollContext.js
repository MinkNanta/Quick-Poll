import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useNavigate } from "react-router";

const PollContext = createContext();

function PollContextProvider({ children }) {
  const [pollTitle, setPollTitle] = useState("");
  const [pollImg, setPollImg] = useState("testPic");
  const [error, setError] = useState(false);
  const [pollUrl, setPollUrl] = useState("");
  const navigate = useNavigate();

  const [poll, setPoll] = useState([]);
  const [pollById, setPollById] = useState([]);

  const [questions, setQuestions] = useState([
    {
      title: "",
      error_title: false,
      timeOut: "120",
      answers: [
        {
          optionTitle: "",
          optionPic: "test",
          error_optionTitle: false,
        },
        {
          optionTitle: "",
          optionPic: "test",
          error_optionTitle: false,
        },
      ],
    },
  ]);

  const getPoll = async () => {
    try {
      const res = await axios.get("/poll");
      setPoll(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPollById = async (id) => {
    try {
      const res = await axios.get(`/poll/${id}`);
      console.log(id);
      console.log(res.data);
      setPollById(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checkInput = () => {
    let shouldAddMore = true;

    const checkTitle = questions.reduce(
      (acc, el, index) => {
        if (el.title === "") {
          acc[index].error_title = true;
          shouldAddMore = false;
        } else {
          acc[index].error_title = false;
        }

        el.answers.forEach((ans, idxAns) => {
          if (ans.optionTitle === "") {
            acc[index].answers[idxAns].error_optionTitle = true;
            shouldAddMore = false;
          } else {
            acc[index].answers[idxAns].error_optionTitle = false;
          }
        });

        return acc;
      },
      [...questions]
    );
    return { shouldAddMore, checkTitle };
  };

  const handleSubmitPoll = async () => {
    try {
      checkInput();
      if (pollTitle === "") {
        return setError(true);
      }

      const body = { pollTitle, pollImg, questions };
      console.log(body);
      const res = await axios.post("/poll/create", body);
      // console.log(res.data);
      // console.log(res.data.id);
      // setPollUrl(res.data.id);

      console.log(res.data.id);
      navigate(`/poll/completed/${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PollContext.Provider
      value={{
        questions,
        setQuestions,
        pollTitle,
        setPollTitle,
        handleSubmitPoll,
        error,
        setError,
        checkInput,
        getPoll,
        poll,
        getPollById,
        pollById,
      }}
    >
      {children}
    </PollContext.Provider>
  );
}

function usePoll() {
  const ctx = useContext(PollContext);
  return ctx;
}

export default PollContextProvider;
export { usePoll, PollContext };
