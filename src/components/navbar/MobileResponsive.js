import { NavLink } from "react-router-dom";
import DynamicButton from "../button/DynamicButton";
import logo from "../../image/logo/greenweblogo-green 1.png";

export default function MobileResponsive({ setIsOpen, isOpen }) {
  return (
    <div>
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="greenweblogo-green 1" className="h-12" />
          </NavLink>
          <button
            className="text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col mt-4 space-y-2 px-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm  font-sans  ${
                isActive ? "font-semibold" : "font-regular"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm  font-sans  ${
                isActive ? "font-semibold" : "font-regular"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm font-sans   ${
                isActive ? "font-semibold" : "font-regular"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-heading dark:text-white px-3 py-2 rounded-md text-sm  font-sans  ${
                isActive ? "font-semibold" : "font-regular"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <div className="mt-4">
            <DynamicButton variant="outlined" size="sm">
              Login
            </DynamicButton>
          </div>
        </div>
      </div>
    </div>
  );
}
