import logo from "@assets/brand-logo/logo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Nav, NavLink } from "./Nav";

const Header = () => {
  return (
    <div className="static flex items-center py-[20px] px-[60px] justify-between">
      <img src={logo} alt="" className="h-[44px] w-[200px]" />
      <Nav>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <div className="flex items-center gap-2">
        <FaInstagram
          size={20}
          className="cursor-pointer transition-transform transform hover:scale-125 hover:text-pink-600"
        />
        <FaFacebook
          size={20}
          className="cursor-pointer transition-transform transform hover:scale-125 hover:text-blue-600"
        />
        <button className="bg-black text-white p-[24px] rounded-md ml-6 hover:bg-red-400">
          +880 1XNN-NNNNNN
        </button>
      </div>
    </div>
  );
};

export default Header;
