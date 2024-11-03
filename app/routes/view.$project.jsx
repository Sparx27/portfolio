import { useLocation } from "@remix-run/react"
import styles from '~/styles/projects.css'
import React, { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

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
  const { projects } = useContext(LanguageContext).lg
  const location = useLocation()
  const toFilter = location.pathname.substring(6)
  const project = projects.projectsList.filter(p => p.url === toFilter)[0]

  function renderDescription(description) {
    // Reemplaza los saltos de línea \n con <br />
    return description.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        {index < description.split('\n').length - 1 && <><br /><br /></>}
      </React.Fragment>
    ));
  }

  return (
    <div className="container">
      <div className="project-presentation">
        <h3>{project.title}</h3>
        <p className="description" dangerouslySetInnerHTML={{ __html: project.description }}></p>

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
          <h4>{projects.linksTxt}</h4>
          {
            project.database && <p>Database: <a href={project.database} target="_blank" rel="noreferrer">{project.database}</a></p>
          }
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

        {
          project.imageMuestras && <div className="muestras-container">
            {
              project.imageMuestras.map((image, index) => <img key={2522 + index} src={image} alt="imagenes de muestra" />)
            }
          </div>
        }

      </div>
    </div>
  )
}

export default ProjectFull