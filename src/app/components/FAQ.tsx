"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FAQItemProps {
  innerRef: React.MutableRefObject<HTMLDivElement | null>;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const answerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Set the height when the component mounts or when isOpen changes
    setHeight(isOpen ? answerRef.current?.scrollHeight ?? 0 : 0);
  }, [isOpen]);

  const toggleIconClasses = isOpen
    ? "transform rotate-90 duration-300"
    : "transform rotate-180 duration-300";
  const containerClasses = isOpen
    ? "flex flex-col items-center p-4 bg-gray-200 shadow-md rounded-t-lg"
    : "flex flex-col items-center p-4 bg-gray-200 shadow-md rounded-lg";
  const answerClasses = `overflow-hidden transition-height duration-200 bg-gray-200 rounded-b-lg`;

  return (
    <div className="">
      <div className={containerClasses}>
        <div
          className="flex justify-between items-center w-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">{question}</h3>
          <div className="w-12 h-12 flex bg-gray-100 justify-center items-center rounded-lg relative overflow-hidden">
            <div className="w-4 h-[1px] bg-gray-700 absolute"></div>
            <div
              className={`h-4 w-[1px] bg-gray-700 absolute ${toggleIconClasses}`}
            ></div>
          </div>
        </div>
      </div>
      <div ref={answerRef} className={answerClasses} style={{ height }}>
        {isOpen && <p className="p-5 mt-2 text-black leading-7">{answer}</p>}
      </div>
    </div>
  );
};

const FAQPage = () => {
  const squareOneRef = useRef<HTMLDivElement | null>(null);
  const squareTwoRef = useRef<HTMLDivElement | null>(null);
  const squareThreeRef = useRef<HTMLDivElement | null>(null);
  const squareFourRef = useRef<HTMLDivElement | null>(null);
  const squareFiveRef = useRef<HTMLDivElement | null>(null);
  const squareSixRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Funktion zur Erstellung der Animation für ein Quadrat
    const animateSquare = (ref: React.RefObject<HTMLDivElement>) => {
      gsap.fromTo(
        ref.current,
        {
          y: 300, // Startposition
          opacity: 0, // Start-Transparenz
          ease: "power4.out",
        },
        {
          y: 0, // Endposition
          opacity: 1, // End-Transparenz
          duration: 1.5,
          scrollTrigger: {
            trigger: ref.current, // Definieren des Triggers
            start: "top bottom", // Animation startet, wenn das Quadrat den unteren Rand des Viewports erreicht
            end: "bottom top", // Animation endet, wenn das Quadrat den oberen Rand des Viewports erreicht
            toggleActions: "play none none none", // Nur beim ersten Scrollvorgang ausführen
          },
          clearProps: "all", // GSAP-Animationseigenschaften nach Abschluss der Animation zurücksetzen
        }
      );
    };

    // Animationen für jedes Quadrat initialisieren
    animateSquare(squareOneRef);
    animateSquare(squareTwoRef);
    animateSquare(squareThreeRef);
    animateSquare(squareFourRef);
    animateSquare(squareFiveRef);
    animateSquare(squareSixRef);

    // Cleanup-Funktion
    return () => {
      // ScrollTrigger-Instanzen für jedes Quadrat entfernen
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const faqs = [
    {
      question:
        "Werden die Paragrafen in Echtzeit angezeigt, während ich durch die PDF scrolle?",
      answer:
        "Ja, unsere App zeigt Paragrafen in Echtzeit an, sobald du durch ein Gesetzesdokument scrollst. Dies ermöglicht dir, schnell und effizient auf benötigte Informationen zuzugreifen.",
    },
    {
      question:
        "Kann ich auf alle Gesetzestexte zugreifen, wenn ich offline bin?",
      answer:
        "Du kannst dynamisch auswählen, welche Gesetzesbücher du auf deinem Gerät offline zur Verfügung stellen willst. Mit nur einem Klick werden sie gespeichert und sind auch ohne Internetzugang verfügbar.",
    },
    {
      question: "Unterstützt die App verschiedene Dateiformate?",
      answer:
        "Aktuell unterstützt die App PDF-Dateien, da dies das am häufigsten verwendete Format für Gesetzestexte ist. Wir arbeiten jedoch daran, Unterstützung für weitere Formate in Zukunft hinzuzufügen.",
    },
    {
      question: "Wie genau ist die Paragrafenextraktion in der App?",
      answer:
        "Unsere App nutzt fortschrittliche Algorithmen, um eine hohe Genauigkeit bei der Extraktion von Paragrafen zu gewährleisten. Allerdings kann es bei sehr komplexen Dokumenten zu kleineren Abweichungen kommen.",
    },
    {
      question:
        "Kann ich in der App eigene Anmerkungen zu den Gesetzestexten hinzufügen?",
      answer:
        "Ja, du hast die Möglichkeit, eigene Anmerkungen und Markierungen in den Dokumenten zu machen. Diese werden auf deinem Gerät gespeichert und sind bei jedem Öffnen des Dokuments sichtbar.",
    },
    {
      question:
        "Gibt es eine Suchfunktion für spezifische Paragraphen oder Stichworte?",
      answer:
        "Ja, unsere App bietet eine leistungsstarke Suchfunktion, mit der du schnell nach spezifischen Paragraphen oder Stichworten innerhalb eines Gesetzesdokuments suchen kannst.",
    },
  ];

  return (
    <section className="container mx-auto p-5 space-y-5">
      <div className="flex flex-col items-center text-center rounded-lg">
        <div className="gradient-text-purple text-center box-border tracking-wide uppercase bg-clip-text font-semibold leading-8 text-lg text-gray-700">
          Noch Fragen?
          <br />
        </div>
        <h3 className="text-[50px] font-bold tracking-tight text-gray-700">
          Frequently Asked Questions
          <br />
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-gragray-700 text-lg leading-2 ">
          Paranote liefert dir ein Werkzeug, um den Umgang mit Paragrafen und
          Gesetzestexten so angenehmen wie möglich zu gestalten. Optimiere dein
          Zeitmenagement und schöpfe dein volles Potenzial aus.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <FAQItem
            innerRef={
              index === 0
                ? squareOneRef
                : index === 1
                ? squareTwoRef
                : index === 2
                ? squareThreeRef
                : squareFourRef
            }
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
