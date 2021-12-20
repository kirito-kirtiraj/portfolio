import { useEffect, useState } from 'react'

const useIsActive = (currentRef, activeRef) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (activeRef === null) return
    if (currentRef === activeRef)
      setTimeout(() => {
        setIsActive(true)
      }, 2000)
    else setIsActive(false)
  }, [activeRef, setIsActive])

  return isActive
}

export default useIsActive
