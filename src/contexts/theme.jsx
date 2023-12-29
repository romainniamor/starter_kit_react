import { createContext, useContext, useState, useEffect } from "react";

// Create a context that will hold the values that we are going to expose to our components.
export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

// Create a provider that will wrap our entire app and then we will be able to access the values that we defined in the context above.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Update the local storage whenever the theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // We define the values that we want to expose to our components.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Create a hook to help to consume the values from the context
export default function useTheme() {
  return useContext(ThemeContext);
}
