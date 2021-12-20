import PropTypes from 'prop-types'
import data from '../../../data/education'
import { Card } from '../../atoms'

import './styles.scss'

export const EducationContent = ({ isActive }) => {
  return (
    <div
      className={`education-content ${
        isActive ? '' : 'education-content--padded'
      }`}
    >
      <div className="education-content__container">
        {data.map((item, index) => {
          return (
            <Card bgColor="purple">
              <h2 className="education-content__heading">
                {item.title}
              </h2>
              <p className="education-content__title">
                {item.degree}
              </p>
              <p className="education-content__subtitle">
                {item.uni}
              </p>
              <p className="education-content__text">{item.year}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

EducationContent.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

EducationContent.defaultProps = {}
