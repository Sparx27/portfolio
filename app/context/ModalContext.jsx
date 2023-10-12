import { createContext, useState } from "react";

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isActive,
        setIsActive
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext }
export default ModalProvider
