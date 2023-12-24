import { useState } from "react";
import {
  CarTaxiFront,
  ChevronsUpDown,
  FerrisWheel,
  MapPin,
} from "lucide-react";
import Navbar from "./Navbar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DesktopScreen from "./head-desktop";
import { DatePickerWithRange } from "../date-picker";
import { Button } from "../ui/button";

const Header = () => {
  const [active, setActive] = useState<string | null>("stays");

  const handleClick = (type: string) => {
    setActive(type === active ? null : type);
  };

  return (
    <>
      <div className="bg-[#003B95] font-poppins text-white h-full ">
        <Navbar />
        <div className="my-4 pb-4 flex flex-col gap-16 px-8 relative">
          <div className="flex items-center gap-4">
            {/** Desktop screen */}
            <DesktopScreen />

            {/** Small Device */}
            <div className="md:hidden flex">
              <Popover>
                <PopoverTrigger className="flex items-center">
                  <ChevronsUpDown />
                  More
                </PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-4">
                    <div
                      className={`${
                        active === "attraction"
                          ? "border border-gray-100 bg-[#1A4FA0]"
                          : ""
                      } transition-all duration-200 ease-in-out hover:bg-[#1A4FA0] hover:text-white rounded-full py-3 px-6 cursor-pointer
              
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
                        active === "taxi"
                          ? "border border-gray-100 bg-[#1A4FA0]"
                          : ""
                      } transition-all duration-200 ease-in-out hover:bg-[#1A4FA0] hover:text-white rounded-full py-3 px-6 cursor-pointer
              
              `}
                      onClick={() => handleClick("taxi")}
                    >
                      <div className="flex items-center gap-1">
                        <CarTaxiFront />
                        <span>Taxis</span>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-8 pb-36">
            <h1 className="font-bold mb-1 text-4xl">Find your next stay</h1>
            <span className="text-xl  md:text-2xl">
              Search deals on hotels, homes, and much more...
            </span>
          </div>

          <div className=" absolute inset-x-0 -bottom-28 md:-bottom-8 max-w-screen-sm md:max-w-screen-lg mx-auto">
            <div className="bg-yellow-400 flex lg:flex-row flex-col items-center gap-4 py-6 px-2  w-full lg:px-2 rounded-md justify-center">
              <div className="bg-white rounded-md py-3 w-full">
                <div className="flex items-center text-black gap-2.5 px-4">
                  <MapPin />
                  <span>Location</span>
                </div>
              </div>
              <div className="bg-white rounded-md py-3 w-full">
                <DatePickerWithRange />
              </div>
              <Button size={"lg"}>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
