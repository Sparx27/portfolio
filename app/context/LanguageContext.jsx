import { createContext, useState } from "react";
import { es } from "../db/textEs";
import { en } from "../db/textEn";

const LanguajeContext = createContext()

function LanguajeProvider({ children }) {
  const [lg, setLg] = useState(es)

  function toggleLanguaje() {
    if (lg.languaje === "en") {
      setLg(es)
    }

    if (lg.languaje === "es") {
      setLg(en)
    }
  }

  const data = { lg, toggleLanguaje }

  return <LanguajeContext.Provider value={data}>{children}</LanguajeContext.Provider>
}

export { LanguajeProvider }
export default LanguajeContext 