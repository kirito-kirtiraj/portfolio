import gsap from 'gsap'

const duration = 1
const ease = 'expo.out'

export const swipeLeft = (exitingElement, enteringElement) => {
  gsap.fromTo(
    exitingElement,
    { left: '-15%' },
    { left: '-100%', duration, ease },
  )
  gsap.fromTo(
    enteringElement,
    { left: '85%' },
    { left: 0, duration, ease },
  )
}

export const swipeRight = (exitingElement, enteringElement) => {
  gsap.fromTo(
    exitingElement,
    { left: '15%' },
    { left: '100%', duration, ease },
  )
  gsap.fromTo(
    enteringElement,
    { left: '-85%' },
    { left: 0, duration, ease },
  )
}

export const swipeUp = (exitingElement, enteringElement) => {
  gsap.fromTo(
    exitingElement,
    { top: '-15%' },
    { top: '-100%', duration, ease },
  )
  gsap.fromTo(
    enteringElement,
    { top: '85%' },
    { top: 0, duration, ease },
  )
}

export const swipeDown = (exitingElement, enteringElement) => {
  gsap.fromTo(
    exitingElement,
    { top: '15%' },
    { top: '100%', duration, ease },
  )
  gsap.fromTo(
    enteringElement,
    { top: '-85%' },
    { top: 0, duration, ease },
  )
}
