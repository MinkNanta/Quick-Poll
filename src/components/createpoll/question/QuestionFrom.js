import React, { useState } from "react";
import IconCircular from "../../common/IconCircular";
import UploadPhoto from "../../from/UploadPhoto";
import QuestionOption from "./QuestionOption";
import { TrashIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Input from "../../from/Input";

const img =
  "/Users/nantanitlertwittayarat/Documents/CodeCamp11/Poll-Project/quick-poll/src/assets/img/Card.png";

export default function QuestionFrom({ ques, handleRemove, index }) {
  // const { title, option1, option2, option1_img, option2_img } = ques;
  // https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg

  const [title, setTitle] = useState("title");
  const [option1, setOption1] = useState("option1");
  const [option2, setOption2] = useState("option2");
  const [option1_img, setOption1_img] = useState("");
  const [option2_img, setOption2_img] = useState("");

  // const handleSetImg1 = () => {
  //   setOption1_img();
  // };

  return (
    <div className=" space-y-4 pt-6">
      <div className="flex justify-between ">
        <div className="autoLayoutCol space-x-3">
          <h6># Question {index + 1}</h6>
          <TrashIcon
            className=" text-t_support bg-main w-8 p-2 rounded-full"
            onClick={() => handleRemove(index)}
          />
        </div>

        <div className="autoLayoutCol bg-main rounded-full pl-4 pr-2">
          <p>Time left: 30 sec</p>
          <ChevronDownIcon className=" text-t_support w-8 p-2 " />
        </div>
      </div>

      {/* card option */}

      <div className="bg-bg_main p-8 rounded-2xl shadow-3xl">
        <Input
          placeholder="Enter the question here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-x-8 ">
          <QuestionOption
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            onClose={() => {
              setOption1_img(null);
            }}
            imgValue={option1_img}
            onChangeImg={(e) => {
              if (e.target.files[0]) {
                setOption1_img(e.target.files[0]);
              }
            }}
          />
          <QuestionOption />
        </div>
      </div>
    </div>
  );
}
