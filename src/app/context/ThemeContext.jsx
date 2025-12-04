"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const theme = "dark";
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
