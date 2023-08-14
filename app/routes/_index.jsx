import styles from '~/styles/about.css'

import htmlLogo from '../../public/images/html.png'
import cssLogo from '../../public/images/css.png'
import jsLogo from '../../public/images/js.png'
import reactLogo from '../../public/images/react.png'
import remixLogo from '../../public/images/remix.png'
import nextjsLogo from '../../public/images/nextjs.png'
import nodeLogo from '../../public/images/node.png'
import strapiLogo from '../../public/images/strapi.png'
import mongodbLogo from '../../public/images/mongodb.png'
import tailwindcssLogo from '../../public/images/tailwind.png'
import sassLogo from '../../public/images/sass.png'
import styledcomponentsLogo from '../../public/images/styledcomponents.png'
import gitLogo from '../../public/images/git.png'
import JSCertificate from '../../public/images/freecodecamp/JSCertificate.jpg'
import webDesignCertificate from '../../public/images/freecodecamp/responsiveWebDesignCertificate.jpg'
import githubIcon from '../../public/images/githubIcon.png'

import Footer from '../components/Footer'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function Index() {
  return (
    <section className="about-section">

      <div className="container">
        
        <div className="about-paragraph">
          <h3>Intro</h3>
          <p>
            In early 2022, while employed as a commercial administrator, I stumbled upon something that truly piqued my interest: an online course titled "JavaScript Algorithms and Data Structures" on freecodecamp.com. Since then, I have been continuously advancing my knowledge in web development. I achieve this by enrolling in courses on Udemy, following tutorials on YouTube, and delving into online documentation.
          </p>
          <p>
            Now I am certain that full-stack development is what I want to do. I enjoy learning about various aspects, such as code logic, front-end frameworks, backend development involving database integration, exploring new libraries, debugging, and implementing new features within existing projects. In essence, I take pleasure in the process of crafting functional applications or features that truly work. I began my formal studies at ORT University Uruguay in August 2023, pursuing the program called "Analista en Tecnologías de la Información.". Additionally, I continue to independently expand my programming knowledge.
          </p>
          <p>
            My name is Nicolás Giménez, residing in Montevideo, and I am 27 years old. I like a lot of things: philosophy, astronomy, psychology, plants (got a lot in my apartment), cooking, art (paintings, to be exact) and of course, also love cats (who could resist?). I try to maintain good health by exercising at least four times a week and spending a good amount of time with my loved ones.
          </p>
        </div>

        <div className="stack">
          <h3>Stack</h3>
          <div className="stack-container">
            <div className='img-card'>
              <img src={htmlLogo} alt='html logo' />
              <p className='img-txt'>HTML</p>
            </div>
            <div className='img-card'>
              <img src={cssLogo} alt='css logo' />
              <p className='img-txt'>CSS</p>
            </div>
            <div className='img-card'>
              <img src={jsLogo} alt='js logo' />
              <p className='img-txt'>JavaScript</p>
            </div>
            <div className='img-card'>
              <img src={reactLogo} alt='react logo' />
              <p className='img-txt'>React</p>
            </div>
            <div className='img-card'>
              <img src={remixLogo} alt='remix logo' />
              <p className='img-txt'>Remix Run</p>
            </div>
            <div className='img-card'>
              <img src={nextjsLogo} alt='nextjs logo' />
              <p className='img-txt'>Next.js</p>
            </div>            
            <div className='img-card'>
              <img src={nodeLogo} alt='node logo' />
              <p className='img-txt'>Node.js</p>
            </div>
            <div className='img-card'>
              <img src={strapiLogo} alt='strapi logo' />
              <p className='img-txt'>CMS Strapi</p>
            </div>       
            <div className='img-card'>
              <img src={mongodbLogo} alt='mongodb logo' />
              <p className='img-txt'>MongoDB</p>
            </div>            
            <div className='img-card'>
              <img src={tailwindcssLogo} alt='tailwindcss logo' />
              <p className='img-txt'>Tailwind CSS</p>
            </div>            
            <div className='img-card'>
              <img src={sassLogo} alt='sass logo' />
              <p className='img-txt'>SASS</p>
            </div>               
            <div className='img-card'>
              <img src={styledcomponentsLogo} alt='styled components logo' />
              <p className='img-txt'>S-components</p>
            </div>               
            <div className='img-card'>
              <img src={gitLogo} alt='git logo' />
              <p className='img-txt'>Git</p>
            </div>
          </div>
        </div>

        <div className='certificates-container'>
          <img src={JSCertificate} alt='js certificate' />
          <img src={webDesignCertificate} alt='responsive web design certificate' />
        </div>

        <div className='footer-txt about-footer'>
          <p><i>Made with love on Remix Run. Portfolio code:</i></p>
          <a href='https://github.com/Sparx27/portfolio' target='_blank' rel='noreferrer'>
            <img src={githubIcon} alt='github' />
          </a>
        </div>

      </div>

    </section>
  );
}