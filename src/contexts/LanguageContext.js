import { createContext, useState } from "react";

export const NameContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [name, setName] = useState("Burak");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};
