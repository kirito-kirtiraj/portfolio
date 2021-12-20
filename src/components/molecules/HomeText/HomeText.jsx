import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { fadeIn } from '../../../animations/fade'
import useSlideOut from '../../../hooks/useSlideOut'

import './styles.scss'

export const HomeText = ({ isActive, firstMount }) => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const fadeInSubtitle = () => {
    fadeIn(subtitleRef.current)
  }

  useEffect(() => {
    fadeIn(
      titleRef.current,
      undefined,
      undefined,
      fadeInSubtitle,
      0.5,
    )
  }, [])

  useSlideOut(containerRef, 'homeRef', isActive, firstMount)
  return (
    <div className="home-text" ref={containerRef}>
      <p className="home-text__title" ref={titleRef}>
        Hi, I'm{' '}
        <span className="home-text__title--orange">Kirtiraj</span>
      </p>
      <p className="home-text__subtitle" ref={subtitleRef}>
        A{' '}
        <span className="home-text__subtitle--purple">Fullstack</span>{' '}
        Web Developer
      </p>
    </div>
  )
}

HomeText.propTypes = {
  isActive: PropTypes.bool.isRequired,
  firstMount: PropTypes.bool.isRequired,
}

HomeText.defaultProps = {}
