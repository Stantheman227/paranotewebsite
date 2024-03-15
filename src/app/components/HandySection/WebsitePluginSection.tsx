import React from "react";
import Image from "next/image";

function WebsitePluginSection() {
  return (
    <div className="scroll-section p-5 flex flex-col items-center text-white h-screen bg-black">
      <div className="h-full w-full flex flex-[20%] flex-col p-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">
          Plugin für deinen Webbrowser
        </h2>
        <p>Funktioniert auch Nahtlos in Safari.</p>
      </div>
      <div className="h-full w-full flex flex-[80%] items-center justify-center">
        <div className="relative max-w-full h-full w-[80%] mb-4 overflow-hidden">
          <Image
            src="/SafariPluginWebsite.png"
            alt="JuraScript mit Markierten Paragrafen"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
export default WebsitePluginSection;
