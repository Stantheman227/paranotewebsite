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
        <div className="mt-12 grid grid-cols-2 xl:grid-cols-3 4xl:grid-cols-5 gap-20 w-[70%]">
          {boxData.map((box) => (
            <div
              key={box.id}
              className="bg-white text-center shadow-lg rounded-xl flex flex-col h-[250px] w-[250px]"
            >
              <div className="w-full h-full icon-container mx-auto flex justify-center items-end text-2xl flex-1/2">
                <div className="rounded-full">
                  <div className="h-16 w-16 text-[#6e6af6]">{box.icon}</div>
                </div>
              </div>
              <div className="w-full h-full flex-1/2 space-y-5 p-5">
                <h3 className="text-sm font-semibold">{box.title}</h3>
                <p className="text-[12px] text-gray-600">{box.description}</p>
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
