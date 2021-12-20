import PropTypes from 'prop-types'
import React, { useContext, useRef } from 'react'

import { peekRight, peekRightCancel } from '../../../animations/peek'
import { swipeLeft } from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'
import { Context } from '../../../context/store'
import useIsActive from '../../../hooks/useIsActive'
import { EducationContent, Header } from '../../molecules'
import './styles.scss'

export const Education = React.forwardRef((props, ref) => {
  const messageRef = useRef(null)
  const { state, dispatch } = useContext(Context)
  const { homeRef, activeRef } = state

  const onRightPeekClick = () => {
    swipeLeft(ref.current, homeRef)
    dispatch(setActiveRef(homeRef))
  }

  const isActive = useIsActive(ref.current, activeRef)

  return (
    <section ref={ref} className="education">
      {isActive && <Header rightText="Home" centerText="Education" />}
      {isActive && (
        <div
          className="education__peek-right"
          onMouseEnter={() =>
            peekRight(ref.current, homeRef, messageRef.current)
          }
          onMouseLeave={() =>
            peekRightCancel(ref.current, homeRef, messageRef.current)
          }
          onClick={onRightPeekClick}
        >
          <p ref={messageRef} className="education__peek-text">
            Home
          </p>
        </div>
      )}
      <EducationContent isActive={isActive} />
    </section>
  )
})

Education.propTypes = {}

Education.defaultProps = {}
