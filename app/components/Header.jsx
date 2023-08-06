import { Link, useLocation } from '@remix-run/react'
import myPhoto from '../../public/images/me.jpg'
import sparxIcon from '../../public/images/sparxIcon.png'

function Header({ display }) {
  const { pathname } = useLocation()

  return (
    <header className={display}>

    {
      display === 'header-aside'
        ? (
          <div className='container header-content'>

            <div className='presentation'>
                <h2 className='presentation-name'>Nicolás G. Cardani</h2>

                <div className='menu'>
                  <img src={myPhoto} alt='sparx' />
                  <nav className='menu-nav'>
                    <ul>
                      <li><Link className={pathname === '/' ? 'links active' : 'links'} to='/'>About</Link></li>
                      <li><Link className={pathname === '/projects' ? 'links active' : 'links'} to='/projects'>Projects</Link></li>
                      <li><Link className={pathname === '/contact' ? 'links active' : 'links'} to='/contact'>Contact</Link></li>
                    </ul>
                  </nav>
                </div>

                <h1 className='presentation-dev'>FullStack Developer</h1>
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
                <li><Link className={pathname === '/contact' ? 'links active' : 'links'} to='/contact'>Contact</Link></li>
              </ul>
            </div>
          </nav>
        )
    }

    </header>
  )
}

export default Header