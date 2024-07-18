import { useContext } from 'react'
import githubIcon from '../../public/images/githubIcon.png'
import LanguageContext from '../context/LanguageContext'

function Footer() {
  const { _index } = useContext(LanguageContext).lg

  return (
    <footer>
      <h2>Sparx27</h2>

      <div className='footer-txt'>
        <p><i>{_index.portfolio}</i></p>
        <a href='https://github.com/Sparx27/portfolio' target='_blank' rel='noreferrer'>
          <img src={githubIcon} alt='github' />
        </a>
      </div>
    </footer>
  )
}

export default Footer