import PropTypes from 'prop-types'
import React from 'react'

import './styles.scss'

export const Experience = React.forwardRef((props, ref) => {
  return <section ref={ref} className="experience"></section>
})

Experience.propTypes = {}

Experience.defaultProps = {}
