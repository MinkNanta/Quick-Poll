import ReactDOM from "react-dom";
import { QRCodeSVG } from "qrcode.react";
import CardImg from "../../components/common/CardImg";
// import {DocumentDuplicate}

export default function SharePoll() {
  return (
    <div className="max-w-2xl space-y-4 text-center mx-auto p-12 ">
      {/* <h2>🎉🎊✨</h2> */}
      <h2>About Button design</h2>
      <img
        alt="poll"
        src="https://images.dog.ceo/breeds/terrier-dandie/n02096437_2783.jpg"
        className="h-60 mx-auto rounded-lg"
      />
      <p>Scan QR to join the poll</p>
      <QRCodeSVG className="mx-auto" value="http://www.poolpoll/poll/id" />
      <p>Or share your Poll link and see their results.</p>
      <div>
        <h6 className="bg-bg_sup p-4 rounded-lg text-t_label w-80 mx-auto">
          http://www.poolpoll/poll/id
        </h6>
        <span></span>
      </div>
    </div>
  );
}

// text-center p-12 space-y-4 mx-auto
