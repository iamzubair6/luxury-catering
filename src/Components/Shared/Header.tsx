import logo from "@assets/brand-logo/logo.svg";
import { useEffect, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink } from "./Nav";

const Header = () => {
  const navigate = useNavigate();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const mobileMenu = mobileMenuRef.current;

    const openMenu = () => {
      mobileMenu?.classList.remove("-translate-x-full");
    };

    const closeMenu = () => {
      mobileMenu?.classList.add("-translate-x-full");
    };

    const navLinks = mobileMenu?.querySelectorAll("a");

    menuToggle?.addEventListener("click", openMenu);
    menuClose?.addEventListener("click", closeMenu);
    navLinks?.forEach((link) => link.addEventListener("click", closeMenu));

    // Cleanup event on component unmount
    return () => {
      menuToggle?.removeEventListener("click", openMenu);
      menuClose?.removeEventListener("click", closeMenu);
      navLinks?.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  return (
    <div>
      <div className="static flex items-center py-[20px] px-[30px] justify-between">
        <img
          src={logo}
          alt=""
          className="h-[44px] w-[200px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="lg:hidden">
          <button id="menu-toggle" className="text-black focus:outline-none">
            <CiMenuFries size={24} />
          </button>
        </div>
        <Nav className="hidden lg:flex space-x-6">
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
        <div className="hidden lg:flex items-center gap-2">
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
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className="lg:hidden fixed inset-0 bg-[#f3ede7] z-50 transform -translate-x-full transition-transform duration-300 ease-in-out"
      >
        <div
          id="menu-close"
          className="flex justify-between items-center py-[20px] px-[30px]"
        >
          <img
            src={logo}
            alt=""
            className="h-[44px] w-[200px] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <button className="text-black focus:outline-none">
            <IoMdClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-start space-y-6 py-4 px-8">
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/service" className="text-lg">
            Service
          </NavLink>
          <NavLink to="/gallery" className="text-lg">
            Gallery
          </NavLink>
          <NavLink to="/about" className="text-lg">
            About
          </NavLink>
          <NavLink to="/contact" className="text-lg">
            Contact
          </NavLink>
        </nav>
        <div className="flex flex-col  gap-2 py-4 px-8">
          <div className="flex gap-6 pl-4">
            <FaInstagram
              size={20}
              className="cursor-pointer transition-transform transform hover:scale-125 hover:text-pink-600"
            />
            <FaFacebook
              size={20}
              className="cursor-pointer transition-transform transform hover:scale-125 hover:text-blue-600"
            />
          </div>
          <button className="bg-black text-white p-[24px] rounded-md mt-6 hover:bg-red-400">
            +880 1XNN-NNNNNN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
