export const SET_REFS = 'SET_REFS'
export const SET_ACTIVE_REF = 'SET_ACTIVE_REF'
export const SET_PEEK = 'SET_PEEK'

export const setRefs = (
  homeRef,
  educationRef,
  experienceRef,
  moreRef,
) => {
  return {
    type: SET_REFS,
    payload: { homeRef, educationRef, experienceRef, moreRef },
  }
}

export const setActiveRef = (activeRef) => {
  return {
    type: SET_ACTIVE_REF,
    payload: activeRef,
  }
}

export const setPeek = (peek) => {
  return { type: SET_PEEK, payload: peek }
}
