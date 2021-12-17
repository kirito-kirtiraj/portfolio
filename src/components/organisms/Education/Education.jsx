import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { peekRight, peekRightCancel } from '../../../animations/peek'
import { swipeLeft } from '../../../animations/transitions'
import { setActiveRef } from '../../../context/actions'
import { Context } from '../../../context/store'
import { Header } from '../../molecules'
import './styles.scss'

export const Education = React.forwardRef((props, ref) => {
  const { state, dispatch } = useContext(Context)
  const { homeRef, activeRef } = state

  const onRightPeekClick = () => {
    swipeLeft(ref.current, homeRef)
    dispatch(setActiveRef(homeRef))
  }

  return (
    <section ref={ref} className="education">
      <Header rightText="Home" centerText="Education" />
      {ref.current === activeRef && (
        <div
          className="education__peek-right"
          onMouseEnter={() => peekRight(ref.current, homeRef)}
          onMouseLeave={() => peekRightCancel(ref.current, homeRef)}
          onClick={onRightPeekClick}
        ></div>
      )}
    </section>
  )
})

Education.propTypes = {}

Education.defaultProps = {}
