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
import bootstrapLogo from '../../public/images/bootstrap.png'
import sassLogo from '../../public/images/sass.png'
import styledcomponentsLogo from '../../public/images/styledcomponents.png'
import gitLogo from '../../public/images/git.png'
import JSCertificate from '../../public/images/freecodecamp/JSCertificate.jpg'
import githubIcon from '../../public/images/githubIcon.png'

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
            In early 2022, I embarked on my programming journey when I stumbled upon something that truly piqued my interest: an online course titled "JavaScript Algorithms and Data Structures" on freecodecamp.com. Since then, I have been continuously advancing my knowledge in web development. I have achieved this by enrolling in online courses, following tutorials on YouTube, and delving into online documentation. Furthermore, I commenced my formal studies at ORT University Uruguay in August 2023, where I am pursuing a program known as "Analista en Tecnologías de la Información." In addition, I am committed to independently expanding my programming knowledge.
          </p>
          <p>
            I am certain that full-stack development is what I want to do. I enjoy learning about web programming. In essence, I take pleasure in the process of creating functional applications or features for existing projects that truly work.
          </p>
          <p>
            I am 28 years old, born in the USA, and came to live in Uruguay as a child and now reside in Montevideo. My interests are diverse and include philosophy, astronomy, psychology, art (paintings, to be exact) and of course, also love cats (who could resist?). I try to maintain good health by exercising at least four times a week and spending a good amount of time with my loved ones.
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
              <img src={bootstrapLogo} alt='bootstrap logo' />
              <p className='img-txt'>Bootstrap</p>
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