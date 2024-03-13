import React, { useState, useRef } from "react";

function HandySection() {
  const content = [
    {
      title: "ParaScout erkennt Paragrafen in deiner PDF",
      text: "Lasse dir Paragrafen in Echt-Zeit anzeigen - und nur die, die gerade brauchst.",
    },
    {
      title: "Gesetztestexte direkt als Pop-up",
      text: "Alles auf einem Blick, keine Seiten mehr dazwischen.",
    },
    {
      title: "Plugin für deinen Webbrowser",
      text: "Funktioniert auch Nahtlos in Safari.",
    },
    {
      title: "Command + X für ParaScout in jedem Textfeld",
      text: "Zuverlässig, da wo du es brauchst.",
    },
  ];

  return (
    <div className="scroll-container">
      {content.map((section, index) => (
        <div
          key={index}
          className="scroll-section p-5 flex flex-col items-start justify-start"
        >
          <h2 className="text-3xl text-center font-bold tracking-tighter">
            {section.title}
          </h2>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
}

export default HandySection;
