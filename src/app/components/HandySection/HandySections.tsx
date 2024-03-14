import React from "react";
import Image from "next/image";
import ScriptSection from "./ScriptSection";
import PopUpSection from "./PopUpSection";
import WebsitePluginSection from "./WebsitePluginSection";
import CommandXSection from "./CommandXSection";
import TrinitySection from "./TrinitySection";

export const HandySection: React.FC = () => {
  return (
    <div className="scroll-container info-section">
      <div className="scroll-section p-5 flex flex-col items-center justify-start overflow-hidden">
        <div className="text-white text-center p-5">
          <h1 className="text-3xl font-bold tracking-tighter mb-4">
            App fürs Jurastudium: Dein Studienleben einfacher mit Paranote
          </h1>
          <h2 className="text-xl font-semibold tracking-tighter mb-4">
            Hey Jurastudis! Wir wissen, wie knapp eure Zeit ist und wie wertvoll
            jede Minute sein kann, besonders wenn Prüfungen anstehen oder die
            nächste Hausarbeit fällig ist. Paranote ist hier, um euer
            Studienleben ein bisschen einfacher zu machen. Diese App ist nicht
            nur irgendeine Lernhilfe, sondern der Gamechanger für euer
            Jurastudium.
          </h2>
        </div>
        <div className="">
          <div className="relative h-[500px] w-[800px] flex items-center justify-center overflow-hidden">
            <Image
              src="/Paranote_Landingpage_Laptop.png"
              alt="laptop"
              fill={true}
              style={{ objectPosition: "", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <ScriptSection />
      <PopUpSection />
      <WebsitePluginSection />
      <CommandXSection />
      <TrinitySection />
    </div>
  );
};

export default HandySection;
