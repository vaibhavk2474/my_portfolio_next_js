import React, { ReactNode, useEffect, useState } from "react";
import usePreferredColorScheme from "@/hooks/usePreferredColorScheme";

interface ThemeContextType {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  toggleMode: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeContextProviderProps {
  children: ReactNode;
}

function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [mode, setMode] = useState("light");

  const userPreferredColorScheme = usePreferredColorScheme();

  const toggleMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  useEffect(() => {
    setMode(userPreferredColorScheme);
  }, [userPreferredColorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
