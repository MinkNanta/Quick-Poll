import React, { useState } from "react";
import { TrashIcon, ChevronDownIcon } from "@heroicons/react/outline";

import UploadPhoto from "../../from/UploadPhoto";
import { usePoll } from "../../../contexts/PollContext";

export default function QuestionContainer({}) {
  const { questions, setQuestions, checkInput } = usePoll();

  const handleAddMore = () => {
    const { shouldAddMore, checkTitle } = checkInput();

    if (!shouldAddMore) {
      setQuestions(checkTitle);
      return;
    }

    setQuestions([
      ...questions,
      {
        title: "",
        error_title: false,
        timeOut: "30",
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
  };
  const handleRemove = (index) => {
    const values = [...questions];
    values.splice(index, 1);
    setQuestions(values);
  };

  const handleChangeInput = (index, event) => {
    // console.log(index, event.target.name);
    const values = [...questions];
    values[index][event.target.name] = event.target.value;
    setQuestions(values);
  };

  const handleChangeOptionTitle = (index, indexOp, event) => {
    // console.log(index, event.target.name);
    const values = [...questions];
    values[index].answers[indexOp][event.target.name] = event.target.value;
    setQuestions(values);
  };

  return (
    <div className="space-y-6 pt-4 pb-36">
      {questions?.map((inputField, index) => (
        <div key={index} className="space-y-5">
          <div className="flex justify-between">
            {/* questions heder */}
            {/* questions heder left */}
            <div className="autoLayoutCol space-x-3">
              <h6># Question {index + 1}</h6>
              <TrashIcon
                onClick={() => handleRemove(index)}
                className=" text-t_support bg-main w-8 p-2 rounded-full cursor-pointer"
              />
            </div>
            {/* questions heder right */}
            <div className="grid grid-cols-2 place-content-center">
              <p>Time left:</p>
              <select
                value={inputField.timeOut}
                name="timeOut"
                className="flex px-3 text-base text-t_support focus:outline-none bg-main rounded-full text-right place-content-center"
                onChange={(event) => handleChangeInput(index, event)}
              >
                <option value="30">30s</option>
                <option value="60">60s</option>
                <option value="120">120s</option>
              </select>
            </div>
          </div>

          {/* Background questions */}
          <div className="bg-bg_main p-8 rounded-2xl shadow-3xl">
            {/* Question title */}
            <input
              className="mainInput"
              name="title"
              value={inputField.title}
              onChange={(event) => handleChangeInput(index, event)}
              placeholder="Enter the question here"
            />
            {inputField.error_title && (
              <p className="text-danger text-xs pt-1">
                🔥 This field is require
              </p>
            )}

            {/* Answer options */}
            <div className="grid grid-cols-2 gap-x-8 pt-4">
              {inputField?.answers.map((inputAnswer, indexOp) => (
                <div key={indexOp}>
                  <input
                    className="mainInput"
                    name="optionTitle"
                    value={inputAnswer.optionTitle}
                    onChange={(event) => {
                      handleChangeOptionTitle(index, indexOp, event);
                    }}
                    placeholder="Enter the question here"
                  />
                  {inputAnswer.error_optionTitle && (
                    <p className="text-danger text-xs pt-2">
                      🔥 This field is require
                    </p>
                  )}
                  <UploadPhoto
                    detail="SVG, PNG, JPG or GIF (MAX. 400x400px)"
                    classNameInput="h-40"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {questions?.length < 9 && (
        <button className="dashedButton" onClick={handleAddMore}>
          + Add more question
        </button>
      )}
    </div>
  );
}
