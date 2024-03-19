import React from "react";
import Image from "next/image";

function PopUpSection() {
  return (
    <div className="p-5 flex flex-col items-center text-white">
      <div className="h-full w-full flex flex-[20%] flex-col mb-5">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          Gesetztestexte direkt als Pop-up{" "}
        </h2>
        <p className="">
          Die gefundenen Paragraphen werden dir direkt als Pop-up angezeigt. Du
          kannst direkt mit ihnen interagieren.
        </p>
      </div>
      <div className="h-full w-full flex flex-[80%] items-center justify-center">
        <div className="max-w-full h-full">
          <Image
            src={"/PopUp812.png"}
            alt="Bild für ParaScout"
            height={350}
            width={469}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
export default PopUpSection;
