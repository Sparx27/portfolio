import { Link, useLocation } from "@remix-run/react"

function Menu() {
  const { pathname } = useLocation()

  return (
    <nav className='menu-nav'>
      <ul>
        <li><Link className={pathname === '/' ? 'link-active' : 'nav-link'} to='/'>About</Link></li>
        <li><Link className={pathname === '/projects' ? 'link-active' : 'nav-link'} to='/projects'>Projects</Link></li>
        <li><Link className="" to='/'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Menu