import PropTypes from 'prop-types'

import './styles.scss'

export const HomeText = () => {
  return (
    <div className="home-text">
      <p className="home-text__title">
        Hi, I'm{' '}
        <span className="home-text__title--purple">Kirtiraj</span>
      </p>
      <p className="home-text__subtitle">
        A{' '}
        <span className="home-text__subtitle--orange">Fullstack</span>{' '}
        Web Developer
      </p>
    </div>
  )
}

HomeText.propTypes = {}

HomeText.defaultProps = {}
