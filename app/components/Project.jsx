import { Link } from '@remix-run/react'
import { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

function Project({ title, description, image, url, stack }) {
  const { projects } = useContext(LanguageContext).lg

  return (
    <>
      {
        url.includes('http')
          ? (
            <article>
              <a href={url} target='_blank' rel='noreferrer'>
                <div className='project-box'>
                  <img src={image} alt={`${title}`} />

                  <div className='project-txt'>
                    <h4>{title}</h4>
                    <div className='project-stack-box'>
                      {
                        stack.map((txt, i) => <p key={i + 12500}>{txt}</p>)
                      }
                    </div>
                    <p className='project-description'>{description}</p>
                  </div>

                  <p className='watch-video'>{projects.goToPage}</p>
                </div>
              </a>
            </article>

          )
          : (
            <article>
              <Link to={`/view/${url}`} onClick={() => window.scrollTo(0, 0)}>
                <div className='project-box'>
                  <img src={image} alt={`${title}`} />

                  <div className='project-txt'>
                    <h4>{title}</h4>
                    <div className='project-stack-box'>
                      {
                        stack.map((txt, i) => <p key={i + 12500}>{txt}</p>)
                      }
                    </div>
                    <p className='project-description'>{description}</p>
                  </div>

                  <p className='watch-video'>{projects.watchTxt}</p>
                </div>
              </Link>
            </article>
          )
      }
    </>
  )
}

export default Project
