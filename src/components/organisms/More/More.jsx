import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { peekUp, peekUpCancel } from '../../../animations/peek'
import { swipeDown, swipeLeft } from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'
import { Context } from '../../../context/store'

import './styles.scss'

export const More = React.forwardRef((props, ref) => {
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
          onMouseEnter={() => peekUp(ref.current, homeRef)}
          onMouseLeave={() => peekUpCancel(ref.current, homeRef)}
          onClick={onTopPeekClick}
        ></div>
      )}
    </section>
  )
})

More.propTypes = {}

More.defaultProps = {}
