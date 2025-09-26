import { Link } from "react-router-dom";
import ToggleTheme from "../toogleTheme/ToggleTheme";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
        <span className="text-gray-900 dark:text-white font-bold text-xl">
          <Link to="/">
            <img src={logo} alt="greenweblogo-green 1" />
          </Link>
        </span>
        <div className="flex items-center">
          <Link
            to="/"
            className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </Link>
          <Link
            to="/services"
            className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Services
          </Link>
          <ToggleTheme />
        </div>
      </nav>
    </div>
  );
}
