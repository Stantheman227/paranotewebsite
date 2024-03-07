import React, { useState, useEffect } from "react";

const ShortcutButtons = () => {
  const [cmdPressed, setCmdPressed] = useState(false);
  const [xPressed, setXPressed] = useState(false);
  const [cmdButtonAnimated, setCmdButtonAnimated] = useState(false);
  const [xButtonAnimated, setXButtonAnimated] = useState(false);

  const resetAnimations = () => {
    setCmdButtonAnimated(false);
    setXButtonAnimated(false);
  };

  const simulateBothButtonClicks = () => {
    setCmdPressed(true);
    setXPressed(true);
    setCmdButtonAnimated(true);
    setXButtonAnimated(true);

    setTimeout(() => {
      resetAnimations();
      setCmdPressed(false);
      setXPressed(false);
    }, 300); // Warten Sie, bis die Animation abgeschlossen ist, bevor Sie zurücksetzen
  };

  useEffect(() => {
    const interval = setInterval(() => {
      simulateBothButtonClicks();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCmdClick = () => {
    setCmdPressed(!cmdPressed);
    setCmdButtonAnimated(true);
    setTimeout(() => setCmdButtonAnimated(false), 300);
  };

  const handleXClick = () => {
    setXPressed(!xPressed);
    setXButtonAnimated(true);
    setTimeout(() => setXButtonAnimated(false), 300);
  };

  return (
    <div className="flex flex-row items-center justify-center0">
      <button
        className={`cmdButton ${cmdPressed ? "pressed" : ""} ${
          cmdButtonAnimated ? "animateScale" : ""
        } baseButton border-white border-2 w-full space-x-1 pointer-events-auto`}
        onClick={handleCmdClick}
      >
        <span className="text-m">cmd</span>
        <span className="text-m">⌘</span>
      </button>

      <div className="h-full w-12 text-white flex flex-col item-center justify-center">
        <p>+</p>
      </div>
      <button
        className={`xButton ${xPressed ? "pressed" : ""} ${
          xButtonAnimated ? "animateScale" : ""
        } baseButton border-white border-2 w-full space-x-1 pointer-events-auto`}
        onClick={handleXClick}
      >
        X
      </button>
    </div>
  );
};

export default ShortcutButtons;
