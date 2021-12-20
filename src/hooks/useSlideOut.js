import { useContext, useEffect } from 'react'
import { slideIn, slideOut } from '../animations/slide'
import { Context } from '../context/store'

const useSlideOut = (animatedRef, parentRefKey, isActive) => {
  const { state } = useContext(Context)
  const { activeRef } = state
  const parentRef = state[parentRefKey]

  useEffect(() => {
    if (activeRef === null) return
    if (activeRef === parentRef) slideIn(animatedRef.current)
  }, [activeRef, parentRef])

  useEffect(() => {
    if (!isActive) slideOut(animatedRef.current, true)
  }, [isActive])
}

export default useSlideOut
