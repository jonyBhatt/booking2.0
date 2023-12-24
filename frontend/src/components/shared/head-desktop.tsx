import { useState } from "react";
import {
  BedSingle,
  CarFront,
  CarTaxiFront,
  FerrisWheel,
  Plane,
} from "lucide-react";

const DesktopScreen = () => {
  const [active, setActive] = useState<string | null>("stays");

  const handleClick = (type: string) => {
    setActive(type === active ? null : type);
  };
  return (
    <>
      <div
        className={`${
          active === "stays" ? "border border-gray-100 bg-[#1A4FA0]" : ""
        } transition-all duration-200 ease-in-out hover:bg-[#1A4FA0] hover:text-white rounded-full py-3 px-6 cursor-pointer
              
              `}
        onClick={() => handleClick("stays")}
      >
        <div className="flex items-center gap-1">
          <BedSingle />
          <span>Stays</span>
        </div>
      </div>

      <div
        className={`${
          active === "flight" ? "border border-gray-100 bg-[#1A4FA0]" : ""
        } transition-all duration-200 ease-in-out hover:bg-[#1A4FA0] hover:text-white rounded-full py-3 px-6 cursor-pointer
              
              `}
        onClick={() => handleClick("flight")}
      >
        <div className="flex items-center gap-1">
          <Plane />
          <span>Flight</span>
        </div>
      </div>

      <div
        className={`${
          active === "rentals" ? "border border-gray-100 bg-[#1A4FA0]" : ""
        } transition-all duration-200 ease-in-out hover:bg-[#1A4FA0] hover:text-white rounded-full py-3 px-6 cursor-pointer
              
              `}
        onClick={() => handleClick("rentals")}
      >
        <div className="flex items-center gap-1">
          <CarFront />
          <span>Car Rentals</span>
        </div>
      </div>

      <div
        className={`${
          active === "attraction" ? "border border-gray-100 bg-[#1A4FA0]" : ""
        } transition-all duration-200 ease-in-out hover:bg-[#1A4FA0] hover:text-white rounded-full py-3 px-6 cursor-pointer hidden md:flex
              
              `}
        onClick={() => handleClick("attraction")}
      >
        <div className="flex items-center gap-1">
          <FerrisWheel />
          <span>Attractions</span>
        </div>
      </div>

      <div
        className={`${
          active === "taxi" ? "border border-gray-100 bg-[#1A4FA0]" : ""
        } transition-all duration-200 ease-in-out hover:bg-[#1A4FA0] hover:text-white rounded-full py-3 px-6 cursor-pointer hidden md:flex
              
              `}
        onClick={() => handleClick("taxi")}
      >
        <div className="flex items-center gap-1">
          <CarTaxiFront />
          <span>Taxis</span>
        </div>
      </div>
    </>
  );
};

export default DesktopScreen;
