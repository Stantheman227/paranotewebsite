import React from "react";
import Image from "next/image";

function WebsitePluginSection() {
  return (
    <div className="p-5 flex flex-col items-center text-white">
      <div className="h-full w-full flex flex-[20%] flex-col mb-5">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          Plugin für deinen Webbrowser
        </h2>
        <p>
          Das Safari Plugin bietet einen nahtlosen übergang, um auch auf
          Webseiten die automatische Paragrafenerkennung zu verwenden.{" "}
        </p>
      </div>
      <div className="h-full w-full flex flex-[80%] items-center justify-center">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/SafariPluginWebsite.png"
            alt="JuraScript mit Markierten Paragrafen"
            height={1075}
            width={1606}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
export default WebsitePluginSection;
