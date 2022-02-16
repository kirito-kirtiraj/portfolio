import { useRef } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import data from '../../../data/experience'
import useSlideOut from '../../../hooks/useSlideOut'
import { Card } from '../../atoms'

import './styles.scss'

export const ExperienceContent = ({ isActive }) => {
  const contentRef = useRef(null)
  useSlideOut(contentRef, 'experienceRef', isActive)

  return (
    <div
      className={`experience-content ${
        isActive ? '' : 'experience-content--padded'
      }`}
    >
      <div className="experience-content__container" ref={contentRef}>
        {data.map((item, index) => {
          return (
            <Card bgColor="orange" key={index}>
              <h2 className="experience-content__heading">
                {item.title}
              </h2>
              <p className="experience-content__title">
                {item.company}
              </p>
              <p className="experience-content__subtitle">
                {item.year}
              </p>
              <p className="experience-content__text">
                <ReactMarkdown>{item.description}</ReactMarkdown>
              </p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

ExperienceContent.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

ExperienceContent.defaultProps = {}
