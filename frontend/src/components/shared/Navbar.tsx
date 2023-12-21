import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="bg-transparent py-4 container font-poppins">
      <div className="flex justify-between items-center">
        {/** Logo */}
        <div>
          <Link
            to="/"
            className="font-bold text-3xl text-white font-poppins tracking-tight"
          >
            Booking2.0
          </Link>
        </div>
        <div className="flex items-center gap-4 text-white">
          <span className="font-poppins text-xl">BDT</span>
          <HelpCircle className="w-6 h-6" />
          <span className="font-poppins text-lg">List your property</span>
          <Button>
            <Link to="/register">Register</Link>
          </Button>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
