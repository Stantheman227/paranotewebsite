import React from "react";
import Image from "next/image";
import {
  ArrowPathRoundedSquareIcon,
  PaintBrushIcon,
  BookOpenIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";

const BentoBoxGrid = () => {
  const boxClasses =
    "flex items-center justify-center rounded-2xl hover:scale-105 transform ease-in duration-100 cursor-pointer";

  return (
    <div className="grid grid-rows-10 grid-cols-10 grid-flow-row gap-5 h-[80%] w-[75%] rounded-2xl p-5">
      <div className={`${boxClasses} col-span-2 row-span-2 shadow-xl bg-black`}>
        <Image
          src="/logo_dm.svg"
          alt="Box 1"
          fill={true}
          style={{ objectFit: "contain" }}
          className="p-5"
        />
      </div>

      <div
        className={`${boxClasses} flex flex-row space-x-5 col-span-3 row-span-2 shadow-xl bg-black `}
      >
        <div className="w-14 h-14 gradient-back rounded-lg p-3">
          <ArrowPathRoundedSquareIcon />
        </div>
        <div className="w-14 h-14 gradient-back rounded-lg p-3">
          <PaintBrushIcon />
        </div>
        <div className="w-14 h-14 gradient-back rounded-lg p-3">
          <BookOpenIcon />
        </div>
        <div className="w-14 h-14 gradient-back rounded-lg p-3">
          <WifiIcon />
        </div>
      </div>

      <div
        className={`${boxClasses} col-span-3 row-span-2 shadow-xl bg-black`}
      >
        <p> Web-Brwoser Plugin </p>
      </div>

      <div className={`${boxClasses} col-span-2 row-span-2 shadow-xl bg-black`}>
        <p className="text-lg gradient-text text-center font-bold">Kann alles <br/> was dein Notizbuch auch kann.</p>
      </div>

      <div className={`${boxClasses} col-span-2 row-span-6 shadow-xl bg-black`}>
        <Image
          src="/Iphone.png"
          alt="IphonePNG"
          fill={true}
          style={{ objectFit: "contain" }}
          className="p-5"
        />
      </div>

      <div className={`${boxClasses} col-span-6 row-span-6 shadow-xl overflow-hidden opacity-100`}>
      <video className="w-full object-cover bg-white">
          <source src="/laptop_mid.mp4" type="video/mp4" />
        </video>      </div>

      <div
        className={`${boxClasses} col-span-2 row-span-8 shadow-xl overflow-hidden`}
      >
        <video autoPlay loop muted className="h-full object-cover">
          <source src="/book_notes.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className={`${boxClasses} col-span-3 row-span-2 shadow-xl bg-black`}
      >
        <p className="gradient-text font-tighter font-bold text-2xl">
          <span className="text-sm gradient-text"> Eine App </span> <br></br> <span className="gradient-text">für dein Jurastudium.</span>
        </p>
      </div>

      <div className={`${boxClasses} col-span-2 row-span-2 shadow-xl bg-black`}>
        <Image
          src="/laden_im_mac_store_white.svg"
          alt="LadenImMacStoreSVG"
          fill={true}
          style={{ objectFit: "contain" }}
          className="p-5 shadow-lg"
        />
      </div>

      <div className={`${boxClasses} col-span-3 row-span-2 shadow-xl bg-black`}>
        <p className="text-black">Additional text for Box 10</p>
      </div>
    </div>
  );
};

export default BentoBoxGrid;
