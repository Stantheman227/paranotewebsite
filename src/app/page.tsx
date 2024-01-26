"use client";
import React, { useEffect } from "react";
import Laptop from "./components/Laptop/page";
import FAQ from "./components/FAQ/page";
import BentoBoxGrid from "./components/BentoBoxGrid/page";
import LawPopUp from "./components/LawPopUp/page";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="h-[2500px] bg-gray-200">
      <div className="">
        <Laptop />
        <div className="h-[4000px] bg-gray-200"></div>
      </div>

      <div className="w-full flex flex-col">
        <section className="sticky top-0 flex items-center justify-center flex-row w-full h-screen bg-black z-10">
          <div className="w-[75%] border-gray-400 rounded-lg overflow-hidden mt-10">
          </div>
        </section>
      </div>

      <div className="relative w-full h-screen flex items-center justify-center bg-black">
        <video autoPlay loop muted className="w-full   z-10 absolute ">
          <source src="/app_video.mp4" type="video/mp4" />
        </video>
        <div className="z-20 flex items-center justify-center h-full w-full">
          <BentoBoxGrid />
        </div>
      </div>
    </main>
  );
}
