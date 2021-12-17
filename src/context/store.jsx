import { createContext, useReducer } from 'react'

import { reducer } from './reducers'

const initialState = {
  peek: false,
  homeRef: null,
  educationRef: null,
  experienceRef: null,
  moreRef: null,
  activeRef: null,
}

export const Context = createContext(initialState)

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
