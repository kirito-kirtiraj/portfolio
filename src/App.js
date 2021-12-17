import { useContext, useEffect, useRef } from 'react'

import {
  Home,
  Education,
  Experience,
  More,
} from './components/organisms'
import { Context } from './context/store'
import { setActiveRef, setPeek, setRefs } from './context/actions'
import './App.scss'
import '@fontsource/ubuntu/300.css'
import '@fontsource/ubuntu/400.css'
import '@fontsource/ubuntu/500.css'
import '@fontsource/ubuntu/700.css'

function App() {
  const home = useRef(null)
  const education = useRef(null)
  const experience = useRef(null)
  const more = useRef(null)

  const { dispatch } = useContext(Context)

  useEffect(() => {
    dispatch(
      setRefs(
        home.current,
        education.current,
        experience.current,
        more.current,
      ),
    )
    dispatch(setPeek(true))
    dispatch(setActiveRef(home.current))
  }, [])

  return (
    <main className="App">
      <Home ref={home} />
      <Education ref={education} />
      <Experience ref={experience} />
      <More ref={more} />
    </main>
  )
}

export default App
