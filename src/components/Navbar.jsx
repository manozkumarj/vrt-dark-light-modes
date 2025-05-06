import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/themeContext.jsx";

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6 bg-dynamic-bg">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* logo */}
            <Link to={"/"} className="text-white text-4xl font-mono">
              DarkMode
            </Link>
          </section>
        </div>
        {/* last section */}
        <section className="flex items-center gap-4 cursor-pointer">
          {theme === "dark" ? (
            <FiSun color="white" size="26px" onClick={toggleTheme} />
          ) : (
            <FaMoon color="white" size="25px" onClick={toggleTheme} />
          )}
        </section>
      </nav>
    </main>
  );
}
