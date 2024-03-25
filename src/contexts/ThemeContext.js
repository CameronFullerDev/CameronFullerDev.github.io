import React from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const getRecommendedTheme = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6 ? "dark" : "light"; // Assuming 6 PM to 6 AM is dark theme
  };

  const [theme, setTheme] = React.useState(() => {
    // Check if the theme is stored in local storage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : getRecommendedTheme(); // If not found, default to "light"
  });

  const triggerTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to local storage
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: triggerTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
