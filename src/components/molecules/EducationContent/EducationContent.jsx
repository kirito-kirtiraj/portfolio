import PropTypes from 'prop-types'
import { useRef } from 'react'

import data from '../../../data/education'
import useSlideOut from '../../../hooks/useSlideOut'
import { Card } from '../../atoms'

import './styles.scss'

export const EducationContent = ({ isActive }) => {
  const contentRef = useRef(null)
  useSlideOut(contentRef, 'educationRef', isActive)

  return (
    <div
      className={`education-content ${
        isActive ? '' : 'education-content--padded'
      }`}
    >
      <div className="education-content__container" ref={contentRef}>
        {data.map((item, index) => {
          return (
            <Card bgColor="purple" key={index}>
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
