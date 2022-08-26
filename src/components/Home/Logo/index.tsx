import './index.scss'
import duckLogo from '../../../assets/images/duck-svgrepo-com.svg'
import Icon from '../../Icons/index'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline().from('#path', {
      drawSVG: 100,
      duration: 6,
      yoyo: true,
      ease: 'power4.inOut',
    })
  }, [])

  return (
    <div className="logo-container">
      <Icon.duckBackground className="svg-container" />
    </div>
  )
}

export default Logo
