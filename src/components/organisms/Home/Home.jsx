import React, { useContext, useRef } from 'react'
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
import {
  swipeLeft,
  swipeRight,
  swipeUp,
} from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'
import './styles.scss'
import { Header } from '../../molecules'

export const Home = React.forwardRef((props, ref) => {
  const leftMessageRef = useRef(null)
  const rightMessageRef = useRef(null)
  const bottomMessageRef = useRef(null)

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
      <Header
        leftText="Education"
        centerText="Home"
        rightText="Experience"
      />
      {ref.current === activeRef && (
        <>
          <div
            className="home__peek-left"
            onMouseEnter={() =>
              peekLeft(
                ref.current,
                educationRef,
                leftMessageRef.current,
              )
            }
            onMouseLeave={() =>
              peekLeftCancel(
                ref.current,
                educationRef,
                leftMessageRef.current,
              )
            }
            onClick={onLeftPeekClick}
          >
            <p
              ref={leftMessageRef}
              className="home__peek-text home__peek-text--left"
            >
              My Education
            </p>
          </div>
          <div
            className="home__peek-right"
            onMouseEnter={() =>
              peekRight(
                ref.current,
                experienceRef,
                rightMessageRef.current,
              )
            }
            onMouseLeave={() =>
              peekRightCancel(
                ref.current,
                experienceRef,
                rightMessageRef.current,
              )
            }
            onClick={onRightPeekClick}
          >
            <p
              ref={rightMessageRef}
              className="home__peek-text home__peek-text--right"
            >
              Professional Experience
            </p>
          </div>
          <div
            className="home__peek-bottom"
            onMouseEnter={() =>
              peekDown(ref.current, moreRef, bottomMessageRef.current)
            }
            onMouseLeave={() =>
              peekDownCancel(
                ref.current,
                moreRef,
                bottomMessageRef.current,
              )
            }
            onClick={onBottomPeekClick}
          >
            <p
              ref={bottomMessageRef}
              className="home__peek-text home__peek-text--bottom"
            >
              More About Me
            </p>
          </div>
          <footer className="footer">
            <p>More About Me</p>
          </footer>
        </>
      )}
    </section>
  )
})

Home.propTypes = {}

Home.defaultProps = {}
