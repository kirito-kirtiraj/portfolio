import gsap from 'gsap/all'

const duration = 2.5
const ease = 'circ'

export const fadeIn = (
  ref,
  d = duration,
  e = ease,
  onComplete = () => {},
  delay = 0,
) => {
  gsap.to(ref, {
    opacity: 1,
    duration: d,
    ease: e,
    onComplete,
    delay,
  })
}
