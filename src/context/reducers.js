import { SET_ACTIVE_REF, SET_PEEK, SET_REFS } from './actions'

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_PEEK:
      return {
        ...state,
        peek: payload,
      }

    case SET_REFS:
      return {
        ...state,
        ...payload,
      }

    case SET_ACTIVE_REF:
      return {
        ...state,
        activeRef: payload,
      }

    default:
      break
  }
}
