import React from "react";
import {
  Sachverhalt812,
  ParagraphenForCaroussel,
} from "@/components/constants";
import ShortcutButtons from "../HighlitedText/ShortcutButtons";
import PopUp from "../PopUp";

function CommandXSection() {
  return (
    <div className="scroll-section p-5 flex flex-col items-center bg-black text-white h-screen overflow-hidden">
      <div className="h-full w-full flex flex-[20%] flex-col p-5">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">
          Command + X für ParaScout in jedem Textfeld
        </h2>
        <p>
          Mit der Tastenkombination Command + X kannst du aus jedem markierten
          Textfeld direkt an die jeweilige Stelle im Gesetzbuch springen.
        </p>
      </div>
      <div className="w-full flex flex-[80%] items-center justify-center">
        <div className="max-w-full h-full w-[80%] overflow-hidden flex flex-col items-center justify-center">
          {/* START */}{" "}
          <div className="flex flex-col items-start space-y-1 ">
            {Sachverhalt812.map((text, index) => (
              <div
                className="text-white text-10px font-semibold text-start font-serif"
                key={index}
              >
                <p>
                  {text}{" "}
                  {index === 4 && (
                    <span className=" text-white highlight-right-to-left">
                      § 812 I 1 Fall 1 BGB
                    </span>
                  )}
                </p>
              </div>
            ))}
            <div className="flex flex-row ">
              <ShortcutButtons />
            </div>
          </div>{" "}
          <div className="flex items-center bg-blue-200 scale-[45%] translate-y-[-20%]">
            <div className="flex flex-col items-center space-y-1">
              {ParagraphenForCaroussel.map((paragraph, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center w-[100%] h-[100%] bg-black text-white`}
                >
                  <PopUp paragraph={paragraph} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ENDE */}
      </div>
    </div>
  );
}
export default CommandXSection;
