import { STACK_LIST } from '../db/stackdb'
import StackBox from '../components/StackBox'
import githubIcon from '../../public/images/githubIcon.png'
import { CERTIFICATES_LIST } from '../db/certificatesdb'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import styles from '~/styles/about.css'
import React, { useContext, useEffect, useRef, useState } from 'react'
import LanguageContext from '../context/LanguageContext'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function Index() {
  const [certShow, setCertShow] = useState(0)
  const prevBtnRef = useRef(null)
  const nextBtnRef = useRef(null)
  const { _index } = useContext(LanguageContext).lg

  function handleNext() {
    if (certShow < CERTIFICATES_LIST.length - 1) {
      setCertShow(certShow + 1)
    }
  }

  function handlePrev() {
    if (certShow > 0) {
      setCertShow(certShow - 1)
    }
  }

  useEffect(() => {
    if (certShow == 0) {
      prevBtnRef.current.disabled = true
    }
    else {
      prevBtnRef.current.disabled = false
    }

    if (certShow == CERTIFICATES_LIST.length - 1) {
      nextBtnRef.current.disabled = true
    }
    else {
      nextBtnRef.current.disabled = false
    }
  }, [certShow])

  return (
    <section className="about-section">

      <div className="container">

        <article className="about-paragraph">
          <h3>Intro</h3>
          {
            _index.intro.map((text, i) => (
              <p key={i + 1500} dangerouslySetInnerHTML={{ __html: text }}></p>
            ))
          }
        </article>

        <article className="stack">
          <h3>Stack</h3>
          <div className="stack-container">
            {
              STACK_LIST.map((tech, i) => (
                <StackBox key={i} image={tech[0]} name={tech[1]} />
              ))
            }
          </div>
        </article>

        <div className='certificates-container'>
          <button
            ref={prevBtnRef}
            className='certificates-btn'
            onClick={handlePrev}><MdOutlineNavigateBefore /></button>
          <figure>
            {
              CERTIFICATES_LIST.map((arr, i) => {
                return <img key={i + 5328} src={arr[0]} alt={arr[1]} className={(certShow == i ? "certificate-show" : "")} />
              })
            }
          </figure>
          <button
            ref={nextBtnRef}
            className='certificates-btn next'
            onClick={handleNext}><MdOutlineNavigateNext /></button>
        </div>

        <div className='footer-txt about-footer'>
          <p><i>{_index.portfolio}</i></p>
          <a href='https://github.com/Sparx27/portfolio' target='_blank' rel='noreferrer'>
            <img src={githubIcon} alt='github' />
          </a>
        </div>

      </div>
    </section>
  );
}