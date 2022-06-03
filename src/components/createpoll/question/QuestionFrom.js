import React, { useState } from "react";
import IconCircular from "../../common/IconCircular";
import UploadPhoto from "../../from/UploadPhoto";
import QuestionOption from "./QuestionOption";
import { TrashIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Input from "../../from/Input";
import DropDown from "../../from/DropDown";

const img =
  "/Users/nantanitlertwittayarat/Documents/CodeCamp11/Poll-Project/quick-poll/src/assets/img/Card.png";

export default function QuestionFrom({ ques, handleRemove, index }) {
  // const { title, option1, option2, option1_img, option2_img } = ques;

  const [title, setTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [image1, setImage1] = useState(null);
  const [option2, setOption2] = useState("");
  const [image2, setImage2] = useState(null);

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

        <DropDown />
        {/* <div className="autoLayoutCol bg-main rounded-full pl-4 pr-2"></div> */}
      </div>

      {/* card option */}

      <div className="bg-bg_main p-8 rounded-2xl shadow-3xl">
        <Input
          classNameInput="h-80"
          placeholder="Enter the question here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-x-8 pt-4">
          <div>
            {/* OPTION 1 */}
            <Input
              placeholder="Answer #1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
            />
            <UploadPhoto
              detail="SVG, PNG, JPG or GIF (MAX. 400x400px)"
              scr={image1}
              classNameInput="h-40"
              onClose={() => setImage1(null)}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage1(e.target.files[0]);
                }
              }}
            />
          </div>

          {/* OPTION 2 */}
          <div>
            <Input
              placeholder="Answer #2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />
            <UploadPhoto
              detail="SVG, PNG, JPG or GIF (MAX. 400x400px)"
              scr={image2}
              classNameInput="h-40"
              onClose={() => setImage2(null)}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage2(e.target.files[0]);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
