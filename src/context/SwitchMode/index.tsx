import React, { ReactNode, useState } from "react";

interface SwitchModeContextType {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  toggleMode: () => void;
}

export const SwitchModeContext = React.createContext<
  SwitchModeContextType | undefined
>(undefined);

interface SwitchModeContextProviderProps {
  children: ReactNode;
}

function SwitchModeContextProvider({
  children,
}: SwitchModeContextProviderProps) {
  const [mode, setMode] = useState("light");

  const toggleMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  return (
    <SwitchModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
      }}
    >
      {children}
    </SwitchModeContext.Provider>
  );
}

export default SwitchModeContextProvider;