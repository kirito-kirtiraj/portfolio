import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Context } from '../../../context/store'
import {
  peekDown,
  peekDownCancel,
  peekLeft,
  peekLeftCancel,
  peekRight,
  peekRightCancel,
} from '../../../animations/peek'
import './styles.scss'
import {
  swipeLeft,
  swipeRight,
  swipeUp,
} from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'

export const Home = React.forwardRef((props, ref) => {
  const { state, dispatch } = useContext(Context)
  const { educationRef, experienceRef, moreRef, activeRef } = state

  const onLeftPeekClick = () => {
    swipeRight(ref.current, educationRef)
    dispatch(setActiveRef(educationRef))
  }

  const onRightPeekClick = () => {
    swipeLeft(ref.current, experienceRef)
    dispatch(setActiveRef(experienceRef))
  }

  const onBottomPeekClick = () => {
    swipeUp(ref.current, moreRef)
    dispatch(setActiveRef(moreRef))
  }

  return (
    <section ref={ref} className="home">
      {ref.current === activeRef && (
        <>
          <div
            className="home__peek-left"
            onMouseEnter={() => peekLeft(ref.current, educationRef)}
            onMouseLeave={() =>
              peekLeftCancel(ref.current, educationRef)
            }
            onClick={onLeftPeekClick}
          ></div>
          <div
            className="home__peek-right"
            onMouseEnter={() => peekRight(ref.current, experienceRef)}
            onMouseLeave={() =>
              peekRightCancel(ref.current, experienceRef)
            }
            onClick={onRightPeekClick}
          ></div>
          <div
            className="home__peek-bottom"
            onMouseEnter={() => peekDown(ref.current, moreRef)}
            onMouseLeave={() => peekDownCancel(ref.current, moreRef)}
            onClick={onBottomPeekClick}
          ></div>
        </>
      )}
    </section>
  )
})

Home.propTypes = {}

Home.defaultProps = {}
