import React from "react";
import Image from "next/image";
import {
  PaintBrushIcon,
  BookOpenIcon,
  WifiIcon,
  CloudIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const boxData = [
  {
    id: 1,
    icon: <BookOpenIcon />,
    title: "Umfassende Gesetzesbibliothek",
    description: "Zugriff auf bis zu 7000 deutsche Gesetze, immer griffbereit.",
  },
  {
    id: 2,
    icon: <WifiIcon />,
    title: "Offline-Funktion",
    description:
      "Studiere effektiv ohne Internetverbindung dank unseres Offline-Modus.",
  },
  {
    id: 3,
    icon: <CloudIcon />,
    title: "Cloud-Speicherung",
    description:
      "Sichere und synchronisiere deine Notizen und Gesetzestexte in der Cloud.",
  },
  {
    id: 4,
    icon: <PaintBrushIcon />,
    title: "Personalisiertes Gesetzbuch",
    description:
      "Passe deine Gesetzbücher mit persönlichen Notizen und Markierungen an.",
  },

  {
    id: 5,
    icon: <AcademicCapIcon />,
    title: "Beta-Phase",
    description:
      "Hilf uns, Paranote zu verbessern, indem du Teil unserer Beta-Tester wirst.",
  },
];

export default function ParanoteInfoSection() {
  return (
    <div className="info-section h-full w-full p-5">
      <div className=" h-full w-full flex flex-col justify-center items-center space-y-20">
        <div className="mt-12 grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          {boxData.map((box) => (
            <div
              key={box.id}
              className="bg-white text-center shadow-lg rounded-xl flex flex-col 2xl:h-[200px] 2xl:w-[200px] xl:h-[180px] xl:w-[180px] h-[180px] w-[180px]"
            >
              <div className="flex flex-1 justify-center items-end p-2">
                <div className="text-[#6e6af6] 4xl:w-16 4xl:h-16 3xl:h-16 3xl:w-16 2xl:h-16 2xl:w-16 xl:h-12 xl:w-12 h-12 w-12">
                  {box.icon}
                </div>
              </div>
              <div className="flex-1 space-y-2 p-2">
                <h3 className="text-xs 2xl:text-sm xl:text-xs lg:text-xs md:text-xs sm:text-xs font-semibold">
                  {box.title}
                </h3>
                <p className="text-[10px] 2xl:text-xs xl:text-[10px] lg:text-[9px] md:text-[8px] sm:text-[7px] text-gray-600">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full w-full flex flex-col justify-between items-center bg-blue-400 p-2">
          <div className="h-full w-full flex flex-col items-center space-y-5">
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 items-center justify-center">
              <div className="h-[350px] w-full bg-purple-30 0 rounded-xl flex items-center justify-center bg-purple-300">
                <div className="h-[200px] w-[200px] bg-black rounded-lg"></div>
              </div>
              <div className="h-[350px] w-full bg-purple-300 rounded-xl flex items-center justify-center">
                {" "}
                <div className="h-[200px] w-full p-5">
                  <h2 className="font-medium text-[34px] tracking-tighter">
                    {" "}
                    Überschrift 2
                  </h2>
                  <p className="font-medium text-[24px] leading-7">
                    Deinem Assistenten für juristische Exzellenz. Entdecke, wie
                    Paranote Dein Studium effizienter und produktiver macht.
                    Paranote ist nicht nur ein digitales Gesetzbuch, Paranote
                    ist dein Begleiter während den Vorlesungen und im
                    Selbststudium. Paranote sucht automatisch für dich
                    Gesetzestexte zu den Paragrafen, die du gerade bearbeitest
                    heraus.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-5 space-x-0 md:space-y-0 md:flex-row md:space-x-5 items-center justify-center">
              <div className="h-[350px] w-full bg-purple-300 rounded-xl flex items-center justify-center">
                {" "}
                <div className="h-[200px] w-full ">
                  <h3></h3>
                  <p>
                    Ab jetzt brauchst du nicht mehr in deinen Gesetzesbüchern
                    wühlen und blättern, das übernimmt Paranote jetzt für dich.
                    Parallel zum scrollen durch deine Dokumente oder Websites,
                    zeigt Paranote dir den Gesetztestext zu allen Verweisen an
                    auf die du bei der Recherche triffst. Mit nur einem Klick
                    kannst du direkt an die richtige Stelle im jeweiligen
                    Gesetzbuch springen.
                  </p>
                </div>
              </div>
              <div className="h-[350px] w-full bg-purple-300 rounded-xl flex items-center justify-center">
                {" "}
                <div className="h-[200px] w-[200px] bg-black rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full flex items-center justify-center bg-orange-400">
        <Image
          src={"/apple_ecosystem.svg"}
          height={1000}
          width={1000}
          alt="Apple Ecosystem"
        />
      </div>
    </div>
  );
}
