import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";
import CardImg from "../../components/common/CardImg";
import { usePoll } from "../../contexts/PollContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import {DocumentDuplicate}

export default function SharePoll() {
  const { pollById, getPollById } = usePoll();
  const { id } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        await getPollById(id);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCard();
  }, []);
  return (
    <div className="max-w-2xl space-y-4 text-center mx-auto p-12 ">
      {/* <h6>Poll has been created</h6> */}
      <h2>{pollById?.title}</h2>
      {/* <img
        alt="poll"
        src={pollById?.pollImg}
        className="h-60 mx-auto rounded-lg"
      /> */}
      <p>
        Scan QR to join the poll <br /> Or share your Poll link
      </p>
      <QRCodeSVG
        className="mx-auto"
        value={`http://www.quickpoll/poll/${pollById?.id}`}
      />
      <div>
        <h6 className="bg-bg_sup p-4 rounded-lg text-t_label w-80 mx-auto">
          {`http://www.quickpoll/poll/${pollById?.id}`}
        </h6>
      </div>
    </div>
  );
}

// text-center p-12 space-y-4 mx-auto
