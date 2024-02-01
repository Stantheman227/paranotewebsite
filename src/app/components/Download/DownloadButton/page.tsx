"use client";

import React, { useState, useEffect } from "react";

const DownloadButton: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animatePress, setAnimatePress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsScrolled(false);
    setAnimatePress(true); // Start der Animation beim Hovern
    setTimeout(() => setAnimatePress(false), 1000); // Stoppt die Animation nach 1 Sekunde
  };

  return (
    <button
      className={`fixed bottom-0 left-1/2 p-4 mb-4 text-white bg-blue-500 rounded-full 
                  transition-opacity duration-300 ease-in-out 
                  ${isScrolled ? "opacity-50" : "opacity-100"} 
                  hover:opacity-100 ${animatePress ? "animate-press" : ""}`}
      onMouseEnter={handleMouseEnter}
    >
      Download App
    </button>
  );
};

export default DownloadButton;
