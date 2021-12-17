import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export const Home = React.forwardRef((props, ref) => {
  return <section ref={ref} className="home"></section>
})

Home.propTypes = {}

Home.defaultProps = {}
