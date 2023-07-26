import { useLocation } from "@remix-run/react"
import { projectsData } from "../db/projects"
import styles from '~/styles/projects.css'

export function meta() {
  return [
    {
      title: 'Project video'
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

function ProjectFull() {
  const location = useLocation()
  const toFilter = location.pathname.substring(6)
  const project = projectsData.filter(p => p.url === toFilter)[0]

  return (
    <div className="container">
      <div className="project-presentation">
        <h3>{project.title}</h3>
        <p className="description">{project.description}</p>

        <div className="iframe" dangerouslySetInnerHTML={{ __html: project.video }} />

        <div className="stack-container">
          {
            project.stack.map((tech, i) => {
              return <div key={i} className="stack-box">
                <p>{tech}</p>
              </div>
            })
          }
        </div>

        <div className="project-links">
          <h4>Feel free to check out the code:</h4>
          {
            project.backend && <p>Backend: <a href={project.backend} target="_blank" rel="noreferrer">{project.backend}</a></p>
          }
          {
            project.frontend && <p>Frontend: <a href={project.frontend} target="_blank" rel="noreferrer">{project.frontend}</a></p>
          }
          {
            project.monorepo && <p>Monorepo: <a href={project.monorepo} target="_blank" rel="noreferrer">{project.monorepo}</a></p>
          }
          
        </div>
      </div>
    </div>
  )
}

export default ProjectFull