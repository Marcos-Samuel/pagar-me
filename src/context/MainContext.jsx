import { createContext } from "react";
import { useMainContextProvider } from "../hooks/useMainContext";

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const value = useMainContextProvider();

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
