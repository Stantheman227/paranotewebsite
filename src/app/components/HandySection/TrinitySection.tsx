import React from "react";
import Image from "next/image";

function TrinitySection() {
  return (
    <div className="p-5 flex flex-col items-center text-white">
      <div className="h-full w-full flex flex-[20%] flex-col">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          Notiere, Markiere und Organisiere aus deiner Menubar App.
        </h2>
        <p>
          In deiner Menubar App, kannst du auf all deine Notizen, Markierungen,
          Verweise usw. zugreifen und sie organisieren. Außerdem, hast du von
          hier Zugriff auf alle weiteren Funktionen.
        </p>
      </div>
      <div className="h-full w-full flex items-start justify-center ">
        <div className="h-[590px] w-full relative">
          <Image
            src={"/Paranote_Homescreen.png"}
            alt="Bild für Notizen"
            priority={true}
            layout="fill" // This makes the image fill the container
            objectFit="cover" // Adjust the object-fit property here
          />
        </div>
      </div>
    </div>
  );
}
export default TrinitySection;
