import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({ lang: "ro", toggleLang: () => {} });

export function LanguageProvider({ children, defaultLang = "ro" }) {
  // lazy init from localStorage (fallback to defaultLang)
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("lang");
    return saved || defaultLang;
  });

  const toggleLang = () => setLang((l) => (l === "ro" ? "en" : "ro"));

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
