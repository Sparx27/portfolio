import Project from '../components/Project'
import { projectsData } from '../db/projects'
import styles from '~/styles/projects.css'

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

  return (
    <section className='projects-section'>
      <div className='container projects-content'>
        <h3>Projects</h3>

        <div className='projects-container'>
          {
            projectsData.map((project, i) => {
              return <Project 
                key={i} 
                title={project.title} 
                description={project.description} 
                image={project.image}
                url={project.url}
              />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
