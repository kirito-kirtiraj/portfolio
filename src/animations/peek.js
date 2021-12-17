import gsap from 'gsap/all'

const duration = 0.5
const ease = 'power4'

export const peekLeft = (activeElement, peekElement) => {
  gsap.to(activeElement, { left: '15%', duration, ease })
  gsap.to(peekElement, { left: '-85%', duration, ease })
}

export const peekLeftCancel = (activeElement, peekElement) => {
  gsap.to(activeElement, { left: 0, duration, ease })
  gsap.to(peekElement, { left: '-100%', duration, ease })
}

export const peekRight = (activeElement, peekElement) => {
  gsap.to(activeElement, { left: '-15%', duration, ease })
  gsap.to(peekElement, { left: '85%', duration, ease })
}

export const peekRightCancel = (activeElement, peekElement) => {
  gsap.to(activeElement, { left: 0, duration, ease })
  gsap.to(peekElement, { left: '100%', duration, ease })
}

export const peekDown = (activeElement, peekElement) => {
  gsap.to(activeElement, { top: '-15%', duration, ease })
  gsap.to(peekElement, { top: '85%', duration, ease })
}

export const peekDownCancel = (activeElement, peekElement) => {
  gsap.to(activeElement, { top: 0, duration, ease })
  gsap.to(peekElement, { top: '100%', duration, ease })
}

export const peekUp = (activeElement, peekElement) => {
  gsap.to(activeElement, { top: '15%', duration, ease })
  gsap.to(peekElement, { top: '-85%', duration, ease })
}

export const peekUpCancel = (activeElement, peekElement) => {
  gsap.to(activeElement, { top: 0, duration, ease })
  gsap.to(peekElement, { top: '-100%', duration, ease })
}
