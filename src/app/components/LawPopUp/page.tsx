import React, { forwardRef } from "react";
import Image from "next/image";


const Card = forwardRef(({ style }, ref) => {



  return (
    <div ref={ref} style={style} className="w-[450px] h-[150px] justify-center flex font-SF-Compact bg-gray-500 overflow-hidden rounded-lg">
          <div className=" text-white rounded-lg p-2 space-y-2 tracking-wide">
            <div className="flex flex-row justify-between items-center">
              <p className="font-bold text-[14px] text-white">
                § 1337 Anmeldung zur Paranote Beta
              </p>
              <div className="w-5 h-5">
              <Image src="/BookClosed.svg" alt="arrow" width={12} height={12} />
              </div>
            </div>
            <p className="space-y-3 font-medium text-[14px]">
              (1) Mit einem Augenzwinkern erklärt der Nutzer seine vollkommen
              unverbindliche Willenserklärung zur Teilnahme an der Beta-Version
              von Paranote (Dienst) und stimmt zu, sich auf ein Abenteuer in der
              Welt des digitalen Notizenmachens einzulassen.
            </p>
          </div>
      </div>
  );
});

  export default Card;