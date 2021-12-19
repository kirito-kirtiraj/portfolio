import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react/cjs/react.development'
import { fadeIn } from '../../../animations/fade'

import './styles.scss'

export const Footer = ({ children }) => {
  const footerRef = useRef(null)

  useEffect(() => {
    fadeIn(footerRef.current)
  }, [])
  return (
    <footer ref={footerRef} className="footer">
      {children}
    </footer>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}
