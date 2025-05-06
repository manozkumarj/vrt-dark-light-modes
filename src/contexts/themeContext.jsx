import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log("savedTheme --> ", savedTheme);
    if (savedTheme && savedTheme?.length > 0) {
      console.log("If block");
      document.documentElement.setAttribute("data-theme", savedTheme);
      setTheme(savedTheme);
    } else if (systemPefersDark) {
      console.log("Else If block");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      console.log("Else block");
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme ? "dark" : false);
  //   localStorage.setItem("theme", theme ? true : false);
  // }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
