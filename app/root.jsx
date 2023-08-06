import {
  Meta,
  Links,
  Scripts,
  LiveReload,
  Outlet,
  useLocation
} from '@remix-run/react'
import { useEffect, useState } from 'react'
import icon from '../public/Sfavicon.ico'
import Header from './components/Header'
import Footer from './components/Footer'

import styles from '~/styles/index.css'

export function meta() {
  return [
    {
      charset: 'utf-8'
    },
    {
      viewport: 'width=device-width,initial-scale=1'
    },
    {
      title: 'Sparx Portfolio'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'icon',
      href: icon,
      type: 'image/ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com'
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			corssorigin: 'true'
		},
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;900&family=Poppins:wght@300;400;500;600;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Document({ children }) {
  const location = useLocation()

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <div className={location.pathname.includes('/projects') || location.pathname.includes('/view') ? 'display-full' : 'display-grid'}>
          <Header display={location.pathname.includes('/projects') || location.pathname.includes('/view') ? 'header-top' : 'header-aside'} />
          {children}
          {
            (location.pathname.includes('/projects') || location.pathname.includes('/view')) && <Footer />
          }
        </div>

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <Document>
      <div 
        className='cursor'
        style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px`}}
      ></div>
      <div className='bg-light'></div>
      <Outlet />
    </Document>
  )
}
