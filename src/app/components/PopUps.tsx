import React from "react";
import PopUp from "./PopUp";
import { Paragraphen } from "../../components/constants";

const PopUps = () => {
  return (
    <div className="flex flex-col space-y-1 items-start">
      {Paragraphen.map((paragraph, index) => (
        <div key={index} className="flex justify-center pointer-events-auto">
          {" "}
          {/* Vermeidung von Index als key, wenn möglich */}
          <PopUp
            paragraph={{
              Header: paragraph.Header,
              Body: paragraph.Body,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PopUps;
