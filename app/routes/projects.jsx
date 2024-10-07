import { useContext } from 'react'
import Project from '../components/Project'
import styles from '~/styles/projects.css'
import LanguageContext from '../context/LanguageContext'

export function meta() {
  return [
    {
      title: 'Portfolio - Projects'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Projects() {
  const { projects } = useContext(LanguageContext).lg

  return (
    <section className='projects-section'>
      <div className='container projects-content'>
        <h3>{projects.t1}</h3>

        <div className='projects-container'>
          {
            projects.projectsList.map((project, i) => {
              return <Project
                key={i}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                stack={project.stack}
              />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
