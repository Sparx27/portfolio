import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

const MailModal = () => {
  const { isActive, setIsActive } = useContext(ModalContext)
  
  return (
    <div className={isActive ? 'modal modal-active' : 'modal'}>

        <div className="modal-container">
          <div className="modal-background" onClick={() => setIsActive(!isActive)}></div>

          <div className='modal-content'>
            <h2>Gmail</h2>
            <p>nicolasgcardani@gmail.com</p>
          </div>
        </div>

    </div>
  )
}

export default MailModal
