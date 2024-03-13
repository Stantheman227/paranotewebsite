import React from "react";
import Image from "next/image";

function HandySection() {
  const content = [
    {
      title: "ParaScout erkennt Paragrafen in deiner PDF",
      text: "ParaScout ist ein Algorithmus, der für dich die Paragrafen in deinem Dokument findet.",
      imageUrl: "/Paranote_PDF_SVG.svg",
    },
    {
      title: "Gesetztestexte direkt als Pop-up",
      text: "Die gefundenen Paragraphen werden dir direkt als Pop-up angezeigt. Du kannst direkt mit ihnen interagieren.",
      imageUrl: "/Paranote_PDF_SVG.svg",
    },
    {
      title: "Plugin für deinen Webbrowser",
      text: "Funktioniert auch Nahtlos in Safari.",
      imageUrl: "/Paranote_PDF_SVG.svg",
    },
    {
      title: "Command + X für ParaScout in jedem Textfeld",
      text: "Mit der Tastenkombination Command + X kannst du aus jedem markierten Textfeld direkt an die jeweilige Stelle im Gesetzbuch springen.",
      imageUrl: "/Paranote_PDF_SVG.svg",
    },
  ];

  return (
    <div className="scroll-container">
      {content.map((section, index) => (
        <div
          key={index}
          className="scroll-section p-5 flex flex-col items-center bg-black text-white h-screen"
        >
          <div className="bg-red-400 flex flex-[20%] flex-col p-5">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">
              {section.title}
            </h2>
            <p>{section.text}</p>
          </div>
          <div className="h-full w-full flex flex-[80%] bg-purple-400 items-center justify-center">
            <Image
              src={section.imageUrl}
              alt="JuraScript mit Markierten Paragrafen"
              height={600}
              width={300}
              className="max-w-full h-auto mb-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HandySection;
