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
    <div className="info-section h-full w-full">
      <div className=" h-full w-full px-8 flex flex-col justify-center items-center space-y-20">
        <div className="mt-12 grid grid-cols-5 gap-10 bg-blue-400 justify-items-center">
          {boxData.map((box) => (
            <div
              key={box.id}
              className="bg-white text-center shadow-lg rounded-xl flex flex-col h-[180px] w-[180px] 2xl:h-[200px] 2xl:w-[200px] xl:h-[180px] xl:w-[180px] lg:h-[160px] lg:w-[160px] md:h-[140px] md:w-[140px] sm:h-[120px] sm:w-[120px]"
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

        <div className="flex flex-col justify-between items-center">
          <div>
            <h2 className="text-6xl font-bold text-center tracking-tighter gradient-text">
              Willkommen bei Paranote
            </h2>
            <p className="mt-4 text-xl text-white text-center">
              Deinem Assistenten für juristische Exzellenz. Entdecke, wie
              Paranote Dein Studium effizienter und produktiver macht.
            </p>
          </div>
          <button className="mt-4 text-sm bg-transparent hover:bg-[#6e6af6] text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            DOWNLAOD
          </button>
        </div>
      </div>

      <div className="h-screen w-full flex items-center justify-center">
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
