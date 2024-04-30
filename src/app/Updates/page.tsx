"use client";
import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

// Inhalt und Daten der Updates in einem Array von Objekten
const updateContent = [
  {
    date: "01.04.2024 12:00:30",
    title: "Paranote Beta Ankündigung",
    content: `
      <p>Liebe Nutzerin, lieber Nutzer,</p>
      <p>vielen Dank, dass du dich für Paranote entschieden hast! Wir hoffen, dass du viel Freude beim Nutzen unserer App haben wirst.</p>
      <p>Bitte beachte, dass sich Paranote derzeit noch in der Beta-Phase befindet. Es kann also gelegentlich zu Bugs oder Abstürzen kommen. Wir arbeiten kontinuierlich daran, die Stabilität und Funktionalität der App zu verbessern.</p>
      <p>Dein Feedback ist für uns von großer Bedeutung. Da die Applikation noch in der Entwicklung ist, sind wir auf deine Rückmeldungen angewiesen. Deine Vorschläge und Anmerkungen helfen uns, Paranote bestmöglich weiterzuentwickeln. Die App wird sich im Laufe der Zeit weiter verändern, und wir streben danach, euer Feedback so gut wie möglich umzusetzen.</p>
      <p>Was das Pricing angeht, so ist es unser Ziel, Paranote zukünftig zu einem Preis anzubieten, der vergleichbar mit den Kosten für einen Kaffee im Monat ist. Bis die Beta-Phase nicht abgeschlossen ist, bleibt Paranote vorerst kostenfrei.</p>
      <p>Kontaktiere uns gern per E-Mail: support@paranote.de</p>
    `,
  },
  {
    date: "16.04.2024 21:21:15",
    title: "Wichtiges Update: V1.0.1",
    content: `
      <p>Liebe Paranote-Nutzer,</p>
      <p>wir möchten euch über einige wichtige Verbesserungen informieren, die wir in unserer neuesten App-Version vorgenommen haben:</p>
      <ul>
        <li><strong>Wiederholtes Ausführen von Befehlen:</strong> Das Problem, bei dem der Befehl Command + X nur einmal funktionierte, wurde behoben. Ihr könnt diesen Befehl jetzt beliebig oft verwenden. In jedem Dokument.</li>
        <li><strong>Aktualisierung der Suchergebnisse auf Parascout Web:</strong> Früher wurden die Suchergebnisse nicht aktualisiert, wenn man auf eine neue Seite wechselte. Dieses Problem ist nun gelöst, und die Ergebnisse sollten korrekt aktualisiert werden. Die 1.1 Version vom Safari Plugin ist hierfür notwendig <a href="https://apps.apple.com/de/app/parascout/id6477825939?l=en-GB&mt=12">Update</a>.</li>
      </ul>
      <p><strong>Wichtiger Hinweis zur Installation:</strong> Leider hat die Update-Funktion in der ersten Version der App nicht funktioniert. Wir bitten euch daher, die neueste Version der App einmalig manuell herunterzuladen und zu installieren, indem ihr dem folgenden Link folgt: <a href="https://github.com/chopperthedoc/ParanoteDownload/releases/download/prod/Paranote.dmg">Paranote herunterladen</a>. Bitte ersetzt die alte Version durch diese neue Version.</p>
      <p>Wir entschuldigen uns für die Unannehmlichkeiten und versichern euch, dass solche Fehler in Zukunft vermieden werden. Vielen Dank für euer Verständnis und eure fortwährende Unterstützung.</p>
    `,
  },
];

export default function Updates() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100">
      <header className="p-5">
        <Link href="/" className="hover:underline">
          <Image
            src={"/ParaNoteLogoLM@3x.png"}
            height={70}
            width={140}
            alt="Paranote_logo"
          />
        </Link>
      </header>
      <div className="flex flex-grow w-full justify-center p-5 bg-gray-100">
        <div
          className="w-full max-w-4xl bg-gray-200 p-8 space-y-4 rounded-lg shadow-md overflow-auto"
          style={{ maxHeight: "80vh" }}
        >
          {updateContent.map((update, index) => (
            <div key={index} className="space-y-5 text-justify">
              <h2 className="text-black font-bold text-[20px]">
                {update.title}
              </h2>
              <p className="text-sm text-gray-600">{update.date}</p>
              <div dangerouslySetInnerHTML={{ __html: update.content }} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
