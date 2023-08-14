import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi' 
import { SiGmail } from 'react-icons/si'
import { MdMail } from 'react-icons/md'
import styles from '~/styles/contact.css'

export function meta() {
  return [
    {
      title: 'Sparx Contact'
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

function contact() {
  return (
    <section className='contact-section'>
      <div className='container contact'>

        <h3>Contact</h3>

        <div className='contact-container'>

          <div className='linkedin-box'>
            <a href='https://www.linkedin.com/in/nicol%C3%A1s-gim%C3%A9nez-cardani-68429b230/' target='_blank' rel='noreferrer'>
              <BsLinkedin className='contact-icon linkedin' />
            </a>
          </div>
          <div className='github-box'>
            <a href='https://github.com/Sparx27' target='_blank' rel='noreferrer'>
              <BsGithub className='contact-icon github' />
            </a>
          </div>
          <div className='contact-box'>
            <BiLogoGmail className='contact-icon gmail' />
          </div>

        </div>

      </div>
    </section>
  )
}

export default contact
