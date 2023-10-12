import { INTRO_TEXT } from '../db/introText'
import { STACK_LIST } from '../db/stackdb'
import StackBox from '../components/StackBox'
import githubIcon from '../../public/images/githubIcon.png'
import JSCertificate from '../../public/images/freecodecamp/JSCertificate.jpg'
import styles from '~/styles/about.css'

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
          {
            INTRO_TEXT.map((text, i) => (
              <p key={i+1500}>{text}</p>
            ))
          }
        </div>

        <div className="stack">
          <h3>Stack</h3>
          <div className="stack-container">
            {
              STACK_LIST.map((tech, i) => (
                <StackBox key={i} image={tech[0]} name={tech[1]} />
              ))
            }
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