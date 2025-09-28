import { useEffect, useState } from "react";
import sun from "../../image/others/sun.png";
import moon from "../../image/others/moon.png";
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
      {theme === "dark" ? <img src={sun} alt="sun" className="w-8 h-8" /> : <img src={moon} alt="moon" className="w-8 h-8" />}
    </div>
  );
}
