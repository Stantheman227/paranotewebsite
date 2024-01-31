"use client";
import React, { useEffect, useRef } from "react";
import Laptop from "./components/Laptop/page";


export default function Home() {
  const scrollRef = useRef(null);
  useEffect(() => {
    let locomotiveScroll;

    import("locomotive-scroll").then(LocomotiveScroll => {
      locomotiveScroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        // Weitere Optionen hier
      });
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main ref={scrollRef} className="h-full bg-gray-200">
      <div className="">
        <Laptop />
        <div className="h-[9000px] bg-gray-200"></div>
      </div>

      <div className="w-full flex flex-col">
        <section className="sticky top-0 flex items-center justify-center flex-row w-full h-screen bg-black z-10">
          <div className="w-[75%] border-gray-400 rounded-lg overflow-hidden mt-10"></div>
        </section>
      </div>

      <div className="h-full w-full flex items-center justify-center">

      </div>

      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="nicefont w-full text-center"> PARANOTE </h1>
          <h2 className="text-end">Hamburg</h2>
        </div>
      </div>
    </main>
  );
}
