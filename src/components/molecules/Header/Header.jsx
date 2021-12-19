import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react/cjs/react.development'
import { fadeIn } from '../../../animations/fade'

import './styles.scss'

export const Header = ({ centerText, leftText, rightText }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    fadeIn(headerRef.current)
  }, [])
  return (
    <header ref={headerRef} className="header">
      <p className="header__text-side">{leftText}</p>
      <p className="header__text-center">{centerText}</p>
      <p className="header__text-side">{rightText}</p>
    </header>
  )
}

Header.propTypes = {
  centerText: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
}

Header.defaultProps = {
  centerText: '',
  leftText: '',
  rightText: '',
}
