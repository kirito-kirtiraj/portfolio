import PropTypes from 'prop-types'
import React, { useContext, useRef } from 'react'

import { peekLeft, peekLeftCancel } from '../../../animations/peek'
import { swipeRight } from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'
import { Context } from '../../../context/store'
import useIsActive from '../../../hooks/useIsActive'
import { ExperienceContent, Header } from '../../molecules'
import './styles.scss'

export const Experience = React.forwardRef((props, ref) => {
  const messageRef = useRef(null)
  const { state, dispatch } = useContext(Context)
  const { homeRef, activeRef } = state

  const isActive = useIsActive(ref.current, activeRef)

  const onLeftPeekClick = () => {
    swipeRight(ref.current, homeRef)
    dispatch(setActiveRef(homeRef))
  }

  return (
    <section ref={ref} className="experience">
      {isActive && <Header leftText="Home" centerText="Experience" />}
      {isActive && (
        <div
          className="experience__peek-left"
          onMouseEnter={() =>
            peekLeft(ref.current, homeRef, messageRef.current)
          }
          onMouseLeave={() =>
            peekLeftCancel(ref.current, homeRef, messageRef.current)
          }
          onClick={onLeftPeekClick}
        >
          <p ref={messageRef} className="experience__peek-text">
            Home
          </p>
        </div>
      )}
      <ExperienceContent isActive={isActive} />
    </section>
  )
})

Experience.propTypes = {}

Experience.defaultProps = {}
