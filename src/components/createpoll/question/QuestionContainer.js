import React, { useState } from "react";
import QuestionFrom from "./QuestionFrom";

export default function QuestionContainer() {
  // Questions que: { title, option1, option2, option1_img, option2_img
  const innit = [
    {
      id: "1",
      title: "1",
      option: "rounder",
      option_img: "",
    },
    {
      id: "2",

      title: "2",
      option1: "rounder",
      option2: "border black",
      option1_img: "",
      option2_img: "",
    },
    {
      id: "3",

      title: "3",
      option1: "rounder",
      option2: "border black",
      option1_img: "",
      option2_img: "",
    },
  ];

  const [questionObj, setQuestionObj] = useState(innit);

  const handleAddMore = () => {
    const newQuestions = [...questionObj];
    newQuestions.push({});
    setQuestionObj(newQuestions);
  };

  const handleRemove = (idx) => {
    console.log(idx);
    const newQuestions = [...questionObj];
    newQuestions.splice(idx, 1);
    setQuestionObj(newQuestions);
  };

  return (
    <div className="space-y-10">
      {questionObj.map((ques, index) => (
        <QuestionFrom ques={ques} index={index} handleRemove={handleRemove} />
      ))}

      {questionObj.length >= 10 ? (
        ""
      ) : (
        <button className="dashedButton" onClick={handleAddMore}>
          + Add more question
        </button>
      )}
    </div>
  );
}
