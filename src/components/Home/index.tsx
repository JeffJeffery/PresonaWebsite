import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greetingArray = 'Hi,'.split('')
  const preNameArray = "I'm ".split('')
  const nameArray = 'Ben.'.split('')
  const pleasantriesArray = "It's nice to meet you!".split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={8}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={preNameArray}
              idx={8 + greetingArray.length}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={8 + greetingArray.length + preNameArray.length}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={pleasantriesArray}
              idx={
                8 +
                greetingArray.length +
                preNameArray.length +
                nameArray.length
              }
            />
          </h1>
          <h2>Computer Engineering Student | Northwestern Univerisy</h2>
          <div className="button-holder">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <Link to="/about" className="flat-button">
              ABOUT
            </Link>
            <Link to="/projects" className="flat-button">
              PROJECTS
            </Link>
          </div>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
