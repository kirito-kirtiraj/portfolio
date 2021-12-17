import PropTypes from 'prop-types'
import React from 'react'

import './styles.scss'

export const Education = React.forwardRef((props, ref) => {
  return <section ref={ref} className="education"></section>
})

Education.propTypes = {}

Education.defaultProps = {}
