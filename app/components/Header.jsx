import { Link, useLocation } from '@remix-run/react'
import { useContext } from "react"
import { ModalContext } from '../context/ModalContext'
import sparxIcon from '../../public/images/sparxIcon.png'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi' 

function Header({ display }) {
  const { pathname } = useLocation()
  const { isActive, setIsActive } = useContext(ModalContext)

  return (
    <header className={display}>

    {
      display === 'header-aside'
        ? (
          <div className='container header-content'>

            <div className='presentation'>
                <h2 className='presentation-name'>Nicolás G. Cardani</h2>

                <h1 className='presentation-dev'>Web Developer</h1>

                <div className='menu'>
                  <nav className='menu-nav'>
                    <ul>
                      <li><Link className={pathname === '/' ? 'links active' : 'links'} to='/'>About</Link></li>
                      <li><Link className={pathname === '/projects' ? 'links active' : 'links'} to='/projects'>Projects</Link></li>
                    </ul>
                  </nav>
                </div>

                <div className='contact-container'>
                  <div className='contact-container'> 
                    <div className='linkedin-box'>
                      <a href='https://www.linkedin.com/in/nicol%C3%A1s-gim%C3%A9nez-cardani-68429b230/' target='_blank' rel='noreferrer'>
                        <BsLinkedin className='contact-icon linkedin' />
                      </a>
                    </div>
                    <div className='github-box'>
                      <a href='https://github.com/Sparx27' target='_blank' rel='noreferrer'>
                        <BsGithub className='contact-icon github' />
                      </a>
                    </div>
                    <div className='contact-box'>
                      <BiLogoGmail className='contact-icon gmail' onClick={() => setIsActive(!isActive)} />
                    </div>
                  </div>
                </div>
            </div>

          </div>
        ) : (
          <nav className='h-top'>
            <div className='h-top-container'>
              <Link to='/'>
                <img src={sparxIcon} alt='sparx icon' />
              </Link>

              <ul className='menu-top'>
                <li><Link className={pathname === '/' ? 'links active' : 'links'} to='/'>About</Link></li>
                <li><Link className={pathname === '/projects' ? 'links active' : 'links'} to='/projects'>Projects</Link></li>
              </ul>
            </div>
          </nav>
        )
    }

    </header>
  )
}

export default Header