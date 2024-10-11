import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      setNav("bg-[#163C63] px-4 py-2 rounded-b-md shadow-sm mt-[0px]");
    } else {
      setNav("");
    }
  });

  return (
    <nav
      className={`w-full md:w-[1440px] px-[20px] flex items-center justify-between fixed md:left-[50%] md:-translate-x-[50%] top-0 z-[1000] ${nav} ${
        !nav && "pb-8 bg-transparent mt-[20px] md:mt-[30px]"
      }`}
    >
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[150px] md:w-[190px]" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex menu-horizontal gap-8">
        <li className=" text-[#FFFFFF] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>Home</NavLink>
        </li>
        <li className=" text-[#FFFFFF] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>Courses</NavLink>
        </li>
        <li className=" text-[#FFFFFF] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>study material</NavLink>
        </li>
        <li className=" text-[#FFFFFF] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>videos</NavLink>
        </li>
        <li className=" text-[#FFFFFF] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>forums</NavLink>
        </li>
        <li className=" text-[#FFFFFF] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>blog</NavLink>
        </li>
        <li className=" text-[#FFFFFF] font-poppins text-sm capitalize relative transition-colors duration-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1"
          >
            About Us{" "}
            <span>
              <RiArrowDropDownLine size={20} />
            </span>
          </button>
          {isOpen && (
            <div className="absolute top-8 left-0 w-40 mt-2 origin-top-left rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
              <div className="py-1">
                <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Link 1
                </Link>
              </div>
            </div>
          )}
        </li>
        <li className="text-[#FFFFFF] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>contact us</NavLink>
        </li>
      </ul>
      <Link to={"/signup"} className="hidden md:flex">
        <NavbarButton />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-[#163C63] shadow-lg transform transition-transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="md:hidden text-white px-6 pt-[30px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <RiCloseLine size={35} /> : ""}
        </button>
        <ul className="flex flex-col gap-6 mt-10 p-6 text-white">
          <li className="font-poppins text-base capitalize">
            <NavLink onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          </li>
          <li className="font-poppins text-base capitalize">
            <NavLink onClick={() => setMobileMenuOpen(false)}>Courses</NavLink>
          </li>
          <li className="font-poppins text-base capitalize">
            <NavLink onClick={() => setMobileMenuOpen(false)}>
              study material
            </NavLink>
          </li>
          <li className="font-poppins text-base capitalize">
            <NavLink onClick={() => setMobileMenuOpen(false)}>videos</NavLink>
          </li>
          <li className="font-poppins text-base capitalize">
            <NavLink onClick={() => setMobileMenuOpen(false)}>forums</NavLink>
          </li>
          <li className="font-poppins text-base capitalize">
            <NavLink onClick={() => setMobileMenuOpen(false)}>blog</NavLink>
          </li>
          <li className="font-poppins text-base capitalize">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1"
            >
              About Us <RiArrowDropDownLine size={20} />
            </button>
            {isOpen && (
              <div className="mt-2 origin-top-left rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                <div className="py-1">
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Link 1
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li className="font-poppins text-base capitalize">
            <NavLink onClick={() => setMobileMenuOpen(false)}>
              contact us
            </NavLink>
          </li>
          <Link to={"/signup"} onClick={() => setMobileMenuOpen(false)}>
            <NavbarButton className="mt-6" />
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
