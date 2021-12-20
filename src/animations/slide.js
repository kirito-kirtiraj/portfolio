import gsap from 'gsap/all'

const duration = 2.5
const ease = 'expo'

export const slideIn = (ref) => {
  gsap.to(ref, { left: 0, duration, ease })
  console.log('slideIn')
}

export const slideOut = (ref, toLeft) => {
  const left = toLeft ? '-50vw' : '50vw'
  gsap.to(ref, { left, duration, ease })
  console.log('slideout')
}
