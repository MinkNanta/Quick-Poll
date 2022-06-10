import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePoll } from "../../contexts/PollContext";
import { useParams } from "react-router";

export default function VoteQuestion() {
  const { getPollById } = usePoll();
  const [ques, setQues] = useState([]);
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await getPollById(id);
        setQues(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCard();
  }, []);
  console.log(ques?.Questions);
  console.log(typeof ques?.Questions);

  // const question = pollById.Questions.map((el) => el);

  // console.log(pollById?.Questions[0]);
  const handelClickVote = () => {
    // try {
    //   if (isLikes) {
    //     await deleteLike(postId);
    //   } else {
    //     await createLike(postId);
    //   }
    //   const res = await getAllPost();
    //   dispatch(initPost(res.data.posts));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mt-12 h-screen space-y-6">
        <h6 className="text-t_link">{ques?.title}</h6>
        {ques?.Questions?.map((el, idx) => (
          <div>
            <div className="pt-4">
              <div className="flex gap-2  items-center justify-between">
                <h3>{el.title}</h3>
                <div className="flex gap-2  items-center ">
                  <h5 className="flex px-3 text-base text-t_support focus:outline-none bg-bg_sup rounded-full text-right place-content-center p-2 w-16">
                    {idx + 1}/{ques.Questions?.length}
                  </h5>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 pt-4">
                {el?.Answers.map((el) => (
                  <button
                    className="border-main bg-bg_sup py-5 px-6 rounded-3xl hover:shadow-3xl text-t_main text-left"
                    onClick={handelClickVote}
                  >
                    {el.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// <>
//             <div className="py-4">
//               <div className="flex gap-2 box items-center justify-between">
//                 <h3>{el.title}</h3>
//                 <div className="flex gap-2 box items-center ">
//                   <h5 className="flex px-3 text-base text-t_support focus:outline-none bg-bg_sup rounded-full text-right place-content-center p-2 w-16">
//                     {idx + 1}/{ques?.Questions?.length}
//                   </h5>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-x-8 pt-4">
//               {el?.Answers.map((el) => (
//                 <div className="bg-bg_sup py-5 px-6 rounded-3xl hover:shadow-3xl text-t_main">
//                   {el.title}
//                 </div>
//               ))}
//             </div>
//           </>
