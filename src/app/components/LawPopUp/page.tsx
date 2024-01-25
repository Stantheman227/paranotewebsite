import React, { forwardRef } from "react";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";

const Card = forwardRef(({ style }, ref) => {



  return (
    <div ref={ref} style={style} className="w-[450px] h-[150px] justify-center flex">
        <div className="card-inner h-full w-full">
          <div className="card-front bg-gray-400 backdrop-blur-xl text-white rounded-lg p-4 md:p-3 space-y-1 note-scrollbar">
            <div className="flex flex-row justify-between items-center">
              <p className="text-md font-semibold text-white">
                § 133742069 Anmeldung zur Paranote Beta
              </p>
              <div className="w-5 h-5">
                <BookmarkSquareIcon className="text-white" />
              </div>
            </div>
            <p className=" text-xs lg:text-sm text-white">
              (1) Mit einem Augenzwinkern erklärt der Nutzer seine vollkommen
              unverbindliche Willenserklärung zur Teilnahme an der Beta-Version
              von Paranote (Dienst) und stimmt zu, sich auf ein Abenteuer in der
              Welt des digitalen Notizenmachens einzulassen. <br /> (2) Die
              Willenserklärung erfolgt durch das Drücken der mysteriösen
              Schaltfläche mit der Aufschrift Ja, ich bin bereit für den
              Nervenkitzel! auf der Website von Paranote. Der Nutzer muss
              keinerlei rechtliche Dokumente ausdrucken, unterzeichnen oder in
              drei Ausfertigungen mit rotem Siegel versehen. <br />
            </p>
          </div>
        </div>
      </div>
  );
});

//               (3) Die Teilnahme an dieser Beta-Version hat keinen ernsthaften
//Zweck und dient ausschließlich dem Spaß und der Neugier. Der
//Nutzer kann sich jederzeit ohne rechtliche Konsequenzen
//zurückziehen, indem er auf die Schaltfläche Nein, danke, ich
//bleibe lieber bei langweiligen Notizen klickt.

  export default Card;