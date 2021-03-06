import gsap, { CustomEase } from 'gsap/all'

gsap.registerPlugin(CustomEase)
const duration = 0.5
const ease = 'power4.out'

const customFadeIn = (message) => {
  gsap.to(message, { opacity: 1, duration, ease })
}

const customFadeOut = (message) => {
  gsap.to(message, {
    opacity: 0,
    duration,
    ease: CustomEase.create(
      'custom',
      'M0,0 C0.11,0.494 -0.088,1 0.09,1 0.232,1 0.504,1 1,1 ',
    ),
  })
}

export const peekLeft = (activeElement, peekElement, message) => {
  gsap.to(activeElement, { left: '15%', duration, ease })
  gsap.to(peekElement, { left: '-85%', duration, ease })
  customFadeIn(message)
}

export const peekLeftCancel = (
  activeElement,
  peekElement,
  message,
) => {
  gsap.to(activeElement, { left: 0, duration, ease })
  gsap.to(peekElement, { left: '-100%', duration, ease })
  customFadeOut(message)
}

export const peekRight = (activeElement, peekElement, message) => {
  gsap.to(activeElement, { left: '-15%', duration, ease })
  gsap.to(peekElement, { left: '85%', duration, ease })
  customFadeIn(message)
}

export const peekRightCancel = (
  activeElement,
  peekElement,
  message,
) => {
  gsap.to(activeElement, { left: 0, duration, ease })
  gsap.to(peekElement, { left: '100%', duration, ease })
  customFadeOut(message)
}

export const peekDown = (activeElement, peekElement, message) => {
  gsap.to(activeElement, { top: '-15%', duration, ease })
  gsap.to(peekElement, { top: '85%', duration, ease })
  customFadeIn(message)
}

export const peekDownCancel = (
  activeElement,
  peekElement,
  message,
) => {
  gsap.to(activeElement, { top: 0, duration, ease })
  gsap.to(peekElement, { top: '100%', duration, ease })
  customFadeOut(message)
}

export const peekUp = (activeElement, peekElement, message) => {
  gsap.to(activeElement, { top: '15%', duration, ease })
  gsap.to(peekElement, { top: '-85%', duration, ease })
  customFadeIn(message)
}

export const peekUpCancel = (activeElement, peekElement, message) => {
  gsap.to(activeElement, { top: 0, duration, ease })
  gsap.to(peekElement, { top: '-100%', duration, ease })
  customFadeOut(message)
}
