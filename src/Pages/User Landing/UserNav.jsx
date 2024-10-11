import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/userLogo.svg";
import head from "../../assets/head2.png";
import au from "../../assets/AU.svg";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState("");
  window.addEventListener("scroll", () => {
    if (scrollY > 120) {
      setNav("bg-[#FFFFFF] px-4 py-2 rounded-b-md shadow-sm mt-[0px]");
    } else {
      setNav("");
    }
  });
  return (
    <nav
      className={`w-[1440px] flex items-center justify-between fixed left-[50%] -translate-x-[50%] top-0 z-[1000] ${nav} ${
        !nav && "pb-8 bg-transparent mt-[30px]"
      }`}
    >
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[190px]" />
      </Link>
      <ul className="menu-horizontal gap-8">
        <li className=" text-[#1A416A] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>Home</NavLink>
        </li>
        <li className=" text-[#1A416A] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>Courses</NavLink>
        </li>
        <li className=" text-[#1A416A] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>study material</NavLink>
        </li>
        <li className=" text-[#1A416A] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>videos</NavLink>
        </li>
        <li className=" text-[#1A416A] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>forums</NavLink>
        </li>
        <li className=" text-[#1A416A] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>blog</NavLink>
        </li>
        <li className=" text-[#1A416A] font-poppins text-sm capitalize relative transition-colors duration-200">
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
        <li className="text-[#1A416A] font-poppins text-sm capitalize transition-colors duration-200">
          <NavLink>contact us</NavLink>
        </li>
      </ul>
      <Link to={"/profile"}>
        <div className="flex items-center bg-[#FFFFFF] rounded-full">
          <img src={head} alt="" className="h-[50px] w-[50px]" />
          <h1 className="ml-[16px] font-poppins text-[#1A416A]">Profile</h1>
          <img src={au} alt="" className="ml-[4px] mr-[12px]" />
        </div>
      </Link>
    </nav>
  );
};

export default UserNav;
