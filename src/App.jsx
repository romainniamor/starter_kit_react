import "./App.css";
import React, { useState, useEffect } from "react";
import SwitchButton from "./components/SwitchTheme";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen w-full bg-white dark:bg-black transition-all duration-300 ease-in-out">
      <SwitchButton toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
