import { useContext, useEffect, useRef } from "react"
import LanguageContext from "../context/LanguageContext"

function LangSwitcher() {
  const { lg, toggleLanguage } = useContext(LanguageContext)
  const checkRef = useRef(null)

  function handleCheck() {
    toggleLanguage()
  }

  useEffect(() => {
    checkRef.current.checked = lg.language == 'en' ? false : true
  }, [lg.language])

  return (
    <div>
      <input ref={checkRef} id='lang-input' type="checkbox" onClick={handleCheck} />
      <label id='lang-label' htmlFor="lang-input">
        <p id="lang-en">En</p>
        <p id="lang-es">Es</p>
      </label>
    </div>
  )
}

export default LangSwitcher