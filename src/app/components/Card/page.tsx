import React, { forwardRef } from "react";
import {
  ArrowPathRoundedSquareIcon,
  PaintBrushIcon,
  BookOpenIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";

const Card = forwardRef(({ iconType, title, description, style }, ref) => {
  let Icon;
  switch (iconType) {
    case "ArrowPathRoundedSquare":
      Icon = ArrowPathRoundedSquareIcon;
      break;
    case "PaintBrush":
      Icon = PaintBrushIcon;
      break;
    case "BookOpen":
      Icon = BookOpenIcon;
      break;
    case "Wifi":
      Icon = WifiIcon;
      break;
    default:
      Icon = () => <></>; // Empty icon as a fallback
  }

  return (
    <div
      ref={ref}
      style={style}
      className="absolute w-[450px] h-[200px] shadow-lg rounded-lg border border-gray-200 bg-white hover:scale-110 transition ease-in-out duration-200 "
      // Fügen Sie hier Ihre Style-Objekt für position: absolute etc. ein
    >
      <div className="h-[10%] w-full flex justify-center items-center border-b border-gray-300"></div>
      <div className="h-full w-full flex flex-col items-start justify-start p-5 space-y-5">
        <div className="flex items-center justify-center w-20 h-20 text-white bg-[#6E6AF6] rounded-lg">
          <div className="w-12 h-12">
            <Icon />
          </div>
        </div>
        <p className="font-bold text-md xl:text-lg">{title}</p>
        <p className="text-left text-md xl:text-lg">{description}</p>
      </div>
    </div>
  );
});

export default Card;
