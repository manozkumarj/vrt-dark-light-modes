import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/themeContext.jsx";

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6 bg-dynamic-navbar-bg shadow-[0px_7px_6px_0px_rgba(0,_0,_0,_0.1)] dark:shadow-[0px_7px_6px_0px_rgba(1,_1,_1,_0.4)]">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* logo */}
            <Link to={"/"} className="text-4xl font-mono text-dynamic-text">
              DarkMode
            </Link>
          </section>
        </div>
        {/* last section */}
        <section className="flex items-center gap-4 cursor-pointer">
          {theme === "dark" ? (
            <FiSun
              color="var(--dynamic-text)"
              size="26px"
              onClick={toggleTheme}
            />
          ) : (
            <FaMoon
              color="var(--dynamic-text)"
              size="25px"
              onClick={toggleTheme}
            />
          )}
        </section>
      </nav>
    </main>
  );
}
