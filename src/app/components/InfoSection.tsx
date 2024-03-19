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
    <div className="info-section h-full w-full p-10">
      <div className="h-full w-full flex flex-col justify-center items-center space-y-20">
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

        <div className="w-full flex flex-col justify-between items-center p-5 overflow-hidden">
          <div className="h-full w-full flex flex-col items-center space-y-5 overflow-hidden ">
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 overflow-hidden ">
              <div className="h-[400px] w-full bg-purple-30 0 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="rounded-xl">
                  <div className="relative flex items-center justify-center h-full w-full rounded-lg overflow-hidden ">
                    {" "}
                    <Image
                      src={"/students_table.jpg"}
                      height={3487}
                      width={5231}
                      alt="students sitting at table"
                      style={{
                        objectFit: "fill",
                        objectPosition: "",
                        transformOrigin: "center",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="h-[350px] w-full rounded-xl flex ">
                {" "}
                <div className="h-full w-full p-5 text-white">
                  <h2 className="font-semibold text-[4vh] mb-5">
                    {" "}
                    Überschrift 1
                  </h2>
                  <p className="font-medium text-[2vh] md:text-[4vh]">
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
            <div className="flex flex-col-reverse space-y-5 space-x-0 md:space-y-0 md:flex-row md:space-x-5 items-center justify-center">
              <div className="h-[350px] w-full rounded-xl">
                {" "}
                <div className="h-full w-full p-5 text-white">
                  <h3 className="font-semibold text-[4vh] mb-5">
                    Überschrift 2
                  </h3>
                  <p className="font-medium text-[2vh] md:text-[4vh]">
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
              <div className="h-[400px] w-full rounded-xl flex items-center justify-center overflow-hidden ">
                {" "}
                <div className="rounded-lg">
                  <div className="relative flex items-center justify-center h-full w-full rounded-lg overflow-hidden ">
                    {" "}
                    <Image
                      src={"/students_table.jpg"}
                      height={3487}
                      width={5231}
                      alt="students sitting at table"
                      style={{
                        objectFit: "contain",
                        objectPosition: "",
                        transformOrigin: "center",
                      }}
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
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
