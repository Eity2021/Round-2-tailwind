import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="
        px-3 py-1 rounded 
        text-gray-900 dark:text-white
        transition-colors duration-500
        ease-in-out
        cursor-pointer
      "
    >
      {theme === "dark" ? "☀️" : "🌙 "}
    </div>
  );
}
