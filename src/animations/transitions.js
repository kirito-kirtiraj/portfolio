import gsap from 'gsap'

const duration = 1.5
const ease = 'expo'

export const swipeLeft = (exitingElement, enteringElement) => {
  gsap.fromTo(
    exitingElement,
    { left: 0 },
    { left: '-100%', duration, ease },
  )
  gsap.fromTo(
    enteringElement,
    { left: '100%' },
    { left: 0, duration, ease },
  )
}

export const swipeRight = (exitingElement, enteringElement) => {
  gsap.fromTo(
    exitingElement,
    { left: 0 },
    { left: '100%', duration, ease },
  )
  gsap.fromTo(
    enteringElement,
    { left: '-100%' },
    { left: 0, duration, ease },
  )
}

export const swipeUp = (exitingElement, enteringElement) => {
  gsap.fromTo(
    exitingElement,
    { top: 0 },
    { top: '-100%', duration, ease },
  )
  gsap.fromTo(
    enteringElement,
    { top: '100%' },
    { top: 0, duration, ease },
  )
}
