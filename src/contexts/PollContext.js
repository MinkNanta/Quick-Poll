import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { useError } from "./ErrorContext";
import { useNavigate } from "react-router";

const PollContext = createContext();

function PollContextProvider({ children }) {
  // const [pollImg, setPollImg] = useState(null);
  const [pollTitle, setPollTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [poll, setPoll] = useState([]);
  const [pollById, setPollById] = useState([]);
  const [questions, setQuestions] = useState([
    {
      title: "",
      error_title: false,
      timeOut: "30",
      question_pic: "",
      answers: [
        {
          optionTitle: "",
          error_optionTitle: false,
        },
        {
          optionTitle: "",
          error_optionTitle: false,
        },
      ],
    },
  ]);

  const getPoll = async () => {
    try {
      const res = await axios.get("/poll");
      setPoll(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const getPollById = async (id) => {
    try {
      const res = await axios.get(`/poll/${id}`);
      setPollById(res.data);
      return res.data;
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

  // console.log(formData);

  const handleSubmitPoll = async () => {
    try {
      console.log("submit");
      checkInput();
      if (!pollTitle) {
        return setError(true);
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("pollTitle", pollTitle);
      formData.append("image", image);

      let i = 1;
      for (const file of questions) {
        formData.append(`questionPic_${i}`, file.question_pic);
        i++;
      }
      formData.append("questions", JSON.stringify(questions));

      const res = await axios.post("/poll/create", formData);
      console.log(res.data);
      navigate(`/poll/completed/${res.data.id}`);
      setImage(null);
      setPollTitle("");
      setQuestions([
        {
          title: "",
          error_title: false,
          timeOut: "30",

          question_pic: "",
          answers: [
            {
              optionTitle: "",
              error_optionTitle: false,
            },
            {
              optionTitle: "",
              error_optionTitle: false,
            },
          ],
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PollContext.Provider
      value={{
        questions,
        setQuestions,
        handleSubmitPoll,
        error,
        setError,
        checkInput,
        getPoll,
        poll,
        getPollById,
        pollById,
        pollTitle,
        setPollTitle,
        image,
        setImage,
        loading,
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
