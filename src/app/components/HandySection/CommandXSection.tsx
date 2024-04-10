import React from "react";
import { Sachverhalt812 } from "@/components/constants";
import ShortcutButtons from "../HighlitedText/ShortcutButtons";

function CommandXSection() {
  return (
    <div className="p-5 flex flex-col items-center text-white overflow-hidden">
      <div className="h-full w-full flex flex-[20%] flex-col">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          Command + X <br />
          für ParaScout in jedem Text
        </h2>
        <p>
          Mit der Tastenkombination Command + X kannst du aus jedem markierten
          Text direkt an die jeweilige Stelle im Gesetzbuch springen.
        </p>
      </div>
      <div className="w-full flex flex-[80%] items-center justify-center">
        <div className="max-w-full h-full w-[80%] overflow-hidden flex flex-col items-center justify-center">
          {/* START */}{" "}
          <div className="max-w-full flex flex-col items-start space-y-1 mt-5 ">
            {Sachverhalt812.map((text, index) => (
              <div
                className="text-white text-[14px] xs:text-[20px] font-semibold text-start font-serif"
                key={index}
                style={{ opacity: index * 0.2 + 0.1 }} // Dynamic inline style for varying opacity
              >
                <p>
                  {text}{" "}
                  {index === 4 && (
                    <span className="text-white highlight-right-to-left">
                      § 812 I 1 Fall 1 BGB
                    </span>
                  )}
                </p>
              </div>
            ))}

            <div className="flex flex-row p-5">
              <ShortcutButtons />
            </div>
          </div>{" "}
        </div>

        {/* ENDE */}
      </div>
    </div>
  );
}
export default CommandXSection;
