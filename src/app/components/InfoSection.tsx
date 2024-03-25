import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PaintBrushIcon,
  BookOpenIcon,
  WifiIcon,
  CloudIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { SiApple } from "react-icons/si";

const boxData = [
  {
    id: 1,
    icon: <BookOpenIcon />,
    title: "Umfassende Gesetzesbibliothek",
    description: "Zugriff auf bis zu 5000 deutsche Gesetze, immer griffbereit.",
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
  {
    id: 6,
    icon: <ComputerDesktopIcon />,
    title: "Nur für MacOS",
    description:
      "Aktuell gibt es Paranote nur für MacOS. Aber keine Sorge, Windows und mobile Geräte sind auch geplant!",
  },
];

export default function ParanoteInfoSection() {
  return (
    <div className="bg-gray-100 h-full w-full p-5">
      <div className="h-full w-full flex flex-col justify-center items-center space-y-20">
        <div className="mt-12 grid grid-cols-1 min-[365px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 min-[1150px]:grid-cols-6 gap-10 justify-items-center">
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
        <div className="flex flex-col max-w-[75vw] lg:max-w-[50vw] space-y-5 items-center justify-center">
          <p className="text-[28px] font-bold tracking-tight text-center">
            Entdecke Paranote – Die ultimative Gesetzestext-App für Studierende
            der Rechtswissenschaften - Nur Für MacOS
          </p>
          <p className="text-center">
            Nutze die exklusive Chance, als Beta-Tester direkten Einfluss auf
            die Entwicklung von Paranote zu nehmen. Unsere App erleichtert dir
            das Studium, indem sie wichtige Paragrafen blitzschnell für dich
            findet und anzeigt. Als Beta-Tester genießt du kostenlosen Zugriff
            auf alle Funktionen und kannst uns wertvolles Feedback geben, um
            Paranote noch besser zu machen.
          </p>

          <Link
            className="w-40 h-14 rounded-lg bg-[#6e6af6] hover:border-[1px] hover:scale-105 active:scale-95 transform ease-in-out duration-200 flex flex-row items-center justify-center space-x-1"
            href="https://github.com/chopperthedoc/ParanoteDownload/releases/download/prod/Paranote.dmg"
          >
            <SiApple className="text-white w-6 h-6" />
            <p className="text-white text-[16px] uppercase font-light">
              Download
            </p>
          </Link>
        </div>

        <div className="h-full w-full xl:w-[80%] xl:p-0 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center place-items-center">
            <div className="flex items-center justify-center w-full max-h-[500px] order-1 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={"/two_men_laptop_park.jpg"}
                height={4000}
                width={6000}
                alt="students sitting at table"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                  transformOrigin: "center",
                }}
              />
            </div>
            <div className="w-full h-max order-2">
              {" "}
              <div>
                <h2 className="font-bold text-[44px] leading-none mb-5 tracking-tighter">
                  {" "}
                  Nutze Paranote überall
                </h2>
                <p className="font-medium text-[24px] leading-snug">
                  Egal ob während der Vorlesung, in der Bib oder draußen im
                  Park. Paranote kannst du überall nutzen, woauchimmer du am
                  besten lernen kannst.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-h-[500px] order-3 md:order-4 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={"/gesetze_db.jpg"}
                height={3577}
                width={5365}
                alt="students sitting at table"
                style={{
                  objectFit: "contain",
                  objectPosition: "",
                  transformOrigin: "center",
                }}
              />
            </div>
            <div className="w-full h-max order-4 md:order-3">
              {" "}
              <div>
                <h2 className="font-bold text-[44px] leading-none mb-5 hyphens-auto tracking-tighter">
                  {" "}
                  Aktuelle Gesetzesdatenbank
                </h2>
                <p className="font-medium text-[24px] leading-snug">
                  Paranote bietet dir die neuste Version von bis zu 5000
                  deutscher Gesetzte, aktualisiert und konsolidiert. Online oder
                  heruntergeladen für die Offline Nutzung, kannst du zwischen
                  Gesetzbüchern hin- und herspringen und alles Lokal oder in der
                  Cloud speichern.
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center justify-center w-full max-h-[500px] order-5 rounded-lg overflow-hidden shadow-xl">
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
            </div>
            <div className="w-full h-max order-6">
              {" "}
              <div>
                <h2 className="font-bold text-[44px] leading-none mb-5 tracking-tighter">
                  {" "}
                  Automatische Paragrafen
                </h2>
                <p className="font-medium text-[24px] leading-snug">
                  unser Algorithmus ist einzigartig und unterstützt dich bei der
                  Recherche im Internet oder in deinen Dokumenten. Nie wieder
                  Zeit und Nerven verschwenden die richtiger Paragrafen zu
                  finden. Mache das meiste aus deiner Zeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
