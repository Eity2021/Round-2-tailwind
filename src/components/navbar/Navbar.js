import ToggleTheme from "../toogleTheme/ToggleTheme";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between">
        <span className="text-gray-900 dark:text-white font-bold text-xl">
          My App
        </span>
        <ToggleTheme />
      </nav>
    </div>
  );
}
