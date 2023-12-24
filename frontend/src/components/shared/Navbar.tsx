import { Link } from "react-router-dom";
import { AlignJustify, HelpCircle } from "lucide-react";
import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 px-8 mx-auto font-poppins">
      <div className="flex justify-between items-center">
        {/** Logo */}
        <div>
          <Link
            to="/"
            className="font-bold text-lg md:text-3xl text-white font-poppins tracking-tight"
          >
            Booking2.0
          </Link>
        </div>
        <div className="md:flex hidden items-center gap-4 text-white">
          <span className="font-poppins text-xl ">BDT</span>
          <HelpCircle className="w-6 h-6" />
          <span className="font-poppins text-lg ">List your property</span>
          <Button>
            <Link to="/register">Register</Link>
          </Button>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>

        {/** Small Device */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 items-start">
                <span className="font-poppins text-xl ">BDT</span>
                <HelpCircle className="w-6 h-6" />
                <span className="font-poppins text-lg ">
                  List your property
                </span>
                <Button>
                  <Link to="/register">Register</Link>
                </Button>
                <Button>
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
