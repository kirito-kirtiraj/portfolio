import PropTypes from 'prop-types'

import './styles.scss'

export const Card = ({ children, bgColor }) => {
  return <div className={`card card--${bgColor}`}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  children: '',
}
