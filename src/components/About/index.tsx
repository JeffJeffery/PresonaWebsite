import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutMeArray = 'About Me:'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={aboutMeArray}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <p>
          Paragraph about me Paragraph about me Paragraph about meParagraph
          about meParagraph about me Paragraph about me Paragraph about me
          Paragraph about me Paragraph about me Paragraph about me Paragraph
          about me Paragraph about me Paragraph about me Paragraph about me
        </p>
        <p>
          Paragraph about me Paragraph about me Paragraph about me Paragraph
          about me Paragraph about me Paragraph about me Paragraph about me
          Paragraph about me Paragraph about me{' '}
        </p>
        <p>
          Paragraph about me Paragraph about me Paragraph about me Paragraph
          about me Paragraph about me Paragraph about me Paragraph about me
          Paragraph about me Paragraph about me{' '}
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
