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
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { SiApple } from "react-icons/si";

const boxData = [
  {
    id: 1,
    icon: <BookOpenIcon />,
    title: "Umfassende Gesetzesbibliothek",
    description: "Zugriff auf über 6000 deutsche Gesetze",
  },
  {
    id: 2,
    icon: <WifiIcon />,
    title: "Offline-Funktion",
    description: "Arbeite effektiv auch ohne Internetverbindung",
  },
  {
    id: 3,
    icon: <CloudIcon />,
    title: "Cloud-Speicherung",
    description:
      "Sichere und synchronisiere deine Notizen und Gesetzestexte in der Cloud",
  },
  {
    id: 4,
    icon: <PaintBrushIcon />,
    title: "Personalisiertes Gesetzbuch",
    description:
      "Passe deine Gesetzbücher mit persönlichen Notizen und Markierungen an",
  },

  {
    id: 5,
    icon: <AcademicCapIcon />,
    title: "Beta-Phase",
    description:
      "Hilf uns, Paranote zu verbessern, indem du Teil unserer Beta-Tester wirst",
  },
  {
    id: 6,
    icon: <ComputerDesktopIcon />,
    title: "Nur für MacOS",
    description:
      "Aktuell gibt es Paranote nur für MacOS. iOS, iPadOS sowie Windows & Android sind geplant",
  },
];
// Funktion zur Generierung der zufälligen Zeichenfolge für das Email Ticket
function generateRandomString(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export default function ParanoteInfoSection() {
  const randomSubject = `Ticket: [${generateRandomString()}] - Feedback`;
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

        <div className="w-full xl:w-[75%] flex flex-col md:flex-row items-center justify-center rounded-xl bg-[#6e6af6] bg-opacity-100 shadow-xl p-5">
          {" "}
          <div className="flex w-full md:w-[50%] items-center justify-center">
            <div className="flex flex-col space-y-10">
              <p className="text-[60px] text-white font-bold tracking-tight">
                Teste Paranote <br /> kostenlos.
              </p>
              <Link
                className="w-[250px] h-[100px] rounded-lg bg-gray-100 hover:border-[1px] hover:scale-105 active:scale-95 transform ease-in-out duration-200 flex flex-row items-center justify-center space-x-5 shadow-xl"
                href="https://github.com/chopperthedoc/ParanoteDownload/releases/download/prod/Paranote.dmg"
              >
                <SiApple className="text-black w-8 h-8" />
                <div className="flex flex-col">
                  <p className="text-black text-[24px] font-semibold">
                    Download
                  </p>
                  <p className="font-light">für MacOS</p>
                </div>
              </Link>{" "}
              <p className="text-[12px] text-white font-thin">
                Mindestens: MacOS 12.0+ | 55mb
              </p>
            </div>
          </div>
          <div className="md:w-[50%] w-full h-full flex">
            <div className="h-[400px] w-[600px] items-center justify-center flex">
              <Image
                src="/Paranote_Landingpage_Laptop.png"
                alt="laptop"
                height={1500}
                width={2000}
              />
            </div>
          </div>
        </div>

        <div className="h-full w-full xl:w-[75%] xl:p-0 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center place-items-center">
            <div className="flex items-center justify-center w-full max-h-[500px] order-1 rounded-lg overflow-hidden">
              <Image
                src={"/DieApp.svg"}
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
            <div className="w-full h-max order-2 space-y-5">
              {" "}
              <div>
                <h2 className="text-[38px] font-medium mb-5">
                  {" "}
                  Die App, die auf Dich hört{" "}
                </h2>
                <p className="text-[20px] font-light">
                  Entwickle gemeinsam mit uns Deine maßgeschneiderte Lernapp.
                  Paranote ist aktuell in der Entwicklungsphase, was es jedem
                  Benutzer ermöglicht, aktiv am Produkt mitzuwirken. Nutze die
                  Chance, die App kostenlos zu testen und mit jedem Feedback,
                  das Du gibst, neue Funktionen zu gestalten.
                </p>
              </div>
              <div className="h-[35px] w-[140px] rounded-xl bg-[#6e6af6] bg-opacity-90 hover:bg-opacity-100 flex items-center justify-center active:scale-95 transform ease-in-out duration-200 p-6 shadow-md">
                <a
                  href={`mailto:support@paranote.de?subject=${encodeURIComponent(
                    randomSubject
                  )}`}
                >
                  <div className="flex flex-row items-center justify-center space-x-2  ">
                    <div className="h-6 w-6 text-white">
                      <EnvelopeIcon />
                    </div>
                    <p className="text-white text-[18px]">Feedback</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-h-[500px] order-3 md:order-4 rounded-lg overflow-hidden">
              <Image
                src={"/MachtsEinfach.svg"}
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
                <h2 className="text-[38px] font-medium mb-5">
                  {" "}
                  Paranote macht&rsquo;s einfach
                </h2>
                <p className="text-[20px] font-light">
                  Mit Paranote erhältst Du Zugriff auf die aktuellsten Fassungen
                  von über 5000 deutschen Gesetzen, die kontinuierlich auf den
                  neuesten Stand gebracht werden. Nutze die Möglichkeit,
                  persönliche Notizen und Markierungen zu Deinen Gesetzen
                  hinzuzufügen und sowohl online als auch offline darauf
                  zuzugreifen – alles vereint in unserer zentralen Datenbank.
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center justify-center w-full max-h-[500px] order-5 rounded-lg overflow-hidden">
              <Image
                src={"/Digitalisierung.svg"}
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
                <h2 className="text-[38px] font-medium mb-5">
                  {" "}
                  Moderne Recherche
                </h2>
                <p className="text-[20px] font-light">
                  Paranote hat das Ziel, die Digitalisierung in der
                  Rechtswissenschaft deutlich voranzubringen. Es geht darum,
                  juristische Recherchen neu zu konzipieren, indem es die Suche
                  nach Gesetzestexten vereinfacht und Methoden für Forschung und
                  Lernen zentralisiert, um so mehr Zeit für die wesentliche
                  Arbeit zu schaffen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
