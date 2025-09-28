import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import MobileResponsive from "./MobileResponsive";
import DynamicButton from "../button/DynamicButton";
import ToggleTheme from "../toogleTheme/ToggleTheme";
import logo from "../../image/logo/greenweblogo-green 1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-backgroundColorOne to-backgroundColorTwo dark:from-darkColorMode dark:to-darkColorMode px-6 py-4">
      <nav className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <span className="text-gray-900 dark:text-white font-bold text-xl">
          <NavLink to="/">
            <img
              src={logo}
              alt="greenweblogo-green 1"
              className=" lg:w-full w-36"
            />
          </NavLink>
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm font-sans ${isActive ? "font-semibold" : "font-regular"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm font-sans   ${isActive ? "font-semibold" : "font-regular"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm  font-sans  ${isActive ? "font-semibold" : "font-regular"
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm  font-sans  ${isActive ? "font-semibold" : "font-regular"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right Side (Theme + Login + Mobile Hamburger) */}
        <div className="flex items-center space-x-3">
          <ToggleTheme />
          <div className="hidden md:block">
            <DynamicButton variant="outlined" size="sm">
              Login
            </DynamicButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileResponsive
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      ></MobileResponsive>
    </div>
  );
}
