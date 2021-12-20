import { useContext, useEffect } from 'react'
import { slideIn, slideOut } from '../animations/slide'
import { Context } from '../context/store'

const useSlideOut = (
  animatedRef,
  parentRefKey,
  isActive,
  firstMount = false,
) => {
  const { state } = useContext(Context)
  const { activeRef, educationRef, experienceRef, moreRef } = state
  const parentRef = state[parentRefKey]

  useEffect(() => {
    if (activeRef === null || activeRef === moreRef) return
    if (activeRef === parentRef && !firstMount)
      slideIn(animatedRef.current)
  }, [activeRef, parentRef])

  let toLeft = true

  if (parentRefKey === 'homeRef' && activeRef === educationRef) {
    toLeft = false
  }

  useEffect(() => {
    if (moreRef !== null && activeRef === moreRef) return
    console.log('object')
    if (!isActive && !firstMount)
      slideOut(animatedRef.current, toLeft)
  }, [isActive, firstMount])
}

export default useSlideOut
