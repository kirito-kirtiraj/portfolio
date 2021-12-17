import PropTypes from 'prop-types'
import React, { useContext, useRef } from 'react'

import { peekUp, peekUpCancel } from '../../../animations/peek'
import { swipeDown, swipeLeft } from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'
import { Context } from '../../../context/store'
import './styles.scss'

export const More = React.forwardRef((props, ref) => {
  const messageRef = useRef(null)
  const { state, dispatch } = useContext(Context)
  const { homeRef, activeRef } = state
  const onTopPeekClick = () => {
    swipeDown(ref.current, homeRef)
    dispatch(setActiveRef(homeRef))
  }
  return (
    <section ref={ref} className="more">
      {ref.current === activeRef && (
        <div
          className="more__peek-top"
          onMouseEnter={() =>
            peekUp(ref.current, homeRef, messageRef.current)
          }
          onMouseLeave={() =>
            peekUpCancel(ref.current, homeRef, messageRef.current)
          }
          onClick={onTopPeekClick}
        >
          <p ref={messageRef} className="more__peek-text">
            Home
          </p>
        </div>
      )}
    </section>
  )
})

More.propTypes = {}

More.defaultProps = {}
