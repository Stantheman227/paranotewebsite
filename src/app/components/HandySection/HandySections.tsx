import React, { useState, useRef } from "react";

function HandySection() {
  const [activeSection, setActiveSection] = useState(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

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

  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (sectionIndex: number) => {
    setActiveSection(sectionIndex);
    sectionsRef.current[sectionIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndY.current = e.changedTouches[0].clientY;
    if (touchStartY.current > touchEndY.current + 5) {
      // Swiped Up
      const nextSection = Math.min(activeSection + 1, content.length - 1);
      scrollToSection(nextSection);
    } else if (touchStartY.current < touchEndY.current - 5) {
      // Swiped Down
      const prevSection = Math.max(activeSection - 1, 0);
      scrollToSection(prevSection);
    }
  };

  return (
    <div
      className="h-full w-full overflow-hidden"
      onTouchStart={(e: any) => handleTouchStart(e)}
      onTouchEnd={(e: any) => handleTouchEnd(e)}
    >
      {content.map((section, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 border-b"
        >
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
}

export default HandySection;
