import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { peekLeft, peekLeftCancel } from '../../../animations/peek'
import { swipeRight } from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'
import { Context } from '../../../context/store'
import './styles.scss'

export const Experience = React.forwardRef((props, ref) => {
  const { state, dispatch } = useContext(Context)
  const { homeRef, activeRef } = state
  const onLeftPeekClick = () => {
    swipeRight(ref.current, homeRef)
    dispatch(setActiveRef(homeRef))
  }
  return (
    <section ref={ref} className="experience">
      {ref.current === activeRef && (
        <div
          className="experience__peek-left"
          onMouseEnter={() => peekLeft(ref.current, homeRef)}
          onMouseLeave={() => peekLeftCancel(ref.current, homeRef)}
          onClick={onLeftPeekClick}
        ></div>
      )}
    </section>
  )
})

Experience.propTypes = {}

Experience.defaultProps = {}
