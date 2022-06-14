import React from "react";

export default function Votebody({ ques, handelClickVote }) {
  return (
    <div className="max-w-2xl mx-auto space-y-10 mb-44">
      {ques.Questions?.map((el, idx) => (
        <div
          key={el.id}
          className="bg-bg_main p-8 rounded-2xl shadow-2xl border border-main"
        >
          <div className="space-y-4">
            <div className="flex gap-2  items-center justify-between text-t_main ">
              <h3>{el.title}</h3>

              <div className="flex gap-2  items-center ">
                <h5 className="flex px-3 text-base text-t_label focus:outline-none bg-bg_sup rounded-full text-right place-content-center p-2 w-16">
                  {idx + 1}/{ques.Questions?.length}
                </h5>
              </div>
            </div>

            {el.questionPic && (
              <div className="overflow-hidden rounded-lg  h-96">
                <img
                  src={el.questionPic}
                  alt="question"
                  className="object-cover h-full w-full"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 pt-4 ">
              {el?.Answers.map((ans) => (
                <div key={ans.id}>
                  <button
                    className="border-main bg-bg_sup py-5 px-6 rounded-3xl hover:bg-buttonHover text-t_main text-left w-full
                    "
                    onClick={() => handelClickVote(ans.id, el.id, ans.Votes)}
                  >
                    {ans.title}
                  </button>

                  <button className="border-main bg-bg_sup py-5 px-6 rounded-3xl hover:bg-buttonHover text-t_main text-left w-full ">
                    {ans.Votes?.map((vote, idx) => vote.userId)}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
