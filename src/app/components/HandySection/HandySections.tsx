import React from "react";
import ScriptSection from "./ScriptSection";
import PopUpSection from "./PopUpSection";
import WebsitePluginSection from "./WebsitePluginSection";
import CommandXSection from "./CommandXSection";
import TrinitySection from "./TrinitySection";

export const HandySection: React.FC = () => {
  return (
    <div className="scroll-container">
      <ScriptSection />
      <PopUpSection />
      <WebsitePluginSection />
      <CommandXSection />
      <TrinitySection />
    </div>
  );
};

export default HandySection;
