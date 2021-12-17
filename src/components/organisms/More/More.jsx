import PropTypes from 'prop-types'
import React from 'react'

import './styles.scss'

export const More = React.forwardRef((props, ref) => {
  return <section ref={ref} className="more"></section>
})

More.propTypes = {}

More.defaultProps = {}
