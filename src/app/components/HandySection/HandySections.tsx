import React from "react";
import Image from "next/image";
import ScriptSection from "./ScriptSection";
import PopUpSection from "./PopUpSection";
import WebsitePluginSection from "./WebsitePluginSection";
import CommandXSection from "./CommandXSection";
import TrinitySection from "./TrinitySection";
import { SiApple } from "react-icons/si";

// Define props type interface
interface HandySectionProps {
  infoSection: React.RefObject<HTMLElement>;
}

// Modify the component to accept props
export const HandySection: React.FC<HandySectionProps> = ({ infoSection }) => {
  const scrollToInfoSection = () => {
    if (infoSection && infoSection.current) {
      infoSection.current.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <div className="info-section mt-[75px]">
      <div className="flex flex-col">
        <div className="h-[35%] w-full text-white p-5 flex">
          <h1 className="w-full text-[40px] text-start font-bold mb-4">
            Das smarte Gesetzbuch für dein Jurastudium.
          </h1>
        </div>

        <div className="flex items-center justify-center max-h-[40%] w-full">
          <div className="relative h-[350px] w-[600px] flex items-center justify-center overflow-hidden">
            <Image
              src="/Paranote_Landingpage_Laptop.png"
              alt="laptop"
              fill={true}
              style={{ objectPosition: "", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="text-white flex items-center justify-center p-5 h-[20%]">
          <div>
            <button
              className="w-40 h-14 rounded-lg bg-[#6e6af6] hover:border-[1px] hover:scale-105 active:scale-95 transform ease-in-out duration-200 flex flex-row items-center justify-center space-x-1"
              onClick={() => scrollToInfoSection()}
            >
              <SiApple className="text-white w-6 h-6" />
              <p className="  text-white text-[16px] uppercase font-light">
                {" "}
                Download{" "}
              </p>
            </button>
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
