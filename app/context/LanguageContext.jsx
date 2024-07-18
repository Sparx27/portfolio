import { createContext, useState } from "react";
import { en } from "../db/textEn";
import { es } from "../db/textEs";

const LanguageContext = createContext()

function LanguageProvider({ children }) {
  const [lg, setLg] = useState(en)

  function toggleLanguage() {
    if (lg.language === "en") {
      setLg(es)
    }

    if (lg.language === "es") {
      setLg(en)
    }
  }

  const data = { lg, toggleLanguage }

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export { LanguageProvider }
export default LanguageContext 