import githubIcon from '../../public/images/githubIcon.png'

function Footer() {
  return (
    <footer>
      <h2>Sparx27</h2>

      <div className='footer-txt'>
        <p><i>Made with love on Remix Run. Portfolio code:</i></p>
        <a href='https://github.com/Sparx27/portfolio' target='_blank' rel='noreferrer'>
          <img src={githubIcon} alt='github' />
        </a>
      </div>
    </footer>
  )
}

export default Footer