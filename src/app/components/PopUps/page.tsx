// PopUps.js
import React from "react";
import PopUp from "../PopUp/page";
import { Paragraphen } from "../constants/page";

const PopUps = () => {
  return (
    <div className="flex flex-col space-y-1 items-center">
      {Paragraphen.map((_, index) => (
        <div className="flex justify-center">
        <PopUp key={index} paragraphIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default PopUps;
