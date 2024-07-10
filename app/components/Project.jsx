import { Link } from '@remix-run/react'

function Project({ title, description, image, url }) {
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
                    <p className='project-description'>{description}</p>
                  </div>
                </div>
              </a>
            </article>

          )
          : (
            <article>
              <Link to={`/view/${url}`}>
                <div className='project-box'>
                  <img src={image} alt={`${title}`} />

                  <div className='project-txt'>
                    <h4>{title}</h4>
                    <p className='project-description'>{description}</p>
                  </div>

                  <p className='watch-video'>Watch Video</p>
                </div>
              </Link>
            </article>
          )
      }
    </>
  )
}

export default Project
