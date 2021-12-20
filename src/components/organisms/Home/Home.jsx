import React, { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

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
import { Context } from '../../../context/store'
import { setActiveRef } from '../../../context/actions'
import { Header, HomeText, Footer } from '../../molecules'
import useIsActive from '../../../hooks/useIsActive'
import './styles.scss'

export const Home = React.forwardRef((props, ref) => {
  const [firstMount, setFirstMount] = useState(true)
  const leftMessageRef = useRef(null)
  const rightMessageRef = useRef(null)
  const bottomMessageRef = useRef(null)

  const { state, dispatch } = useContext(Context)
  const { educationRef, experienceRef, moreRef, activeRef } = state

  const isActive = useIsActive(ref.current, activeRef)

  useEffect(() => {
    setTimeout(() => {
      setFirstMount(false)
    }, 5000)
  }, [])

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
    <section
      ref={ref}
      className={`home + ${
        !isActive || firstMount ? ' home--centered' : ''
      }`}
    >
      {isActive && !firstMount && (
        <Header
          leftText="Education"
          centerText="Home"
          rightText="Experience"
        />
      )}
      <HomeText isActive={isActive} firstMount={firstMount} />
      {isActive && !firstMount && (
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
          <Footer>
            <p>More About Me</p>
          </Footer>
        </>
      )}
    </section>
  )
})

Home.propTypes = {}

Home.defaultProps = {}
