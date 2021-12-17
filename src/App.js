import {
  Home,
  Education,
  Experience,
  More,
} from './components/organisms'

import './App.scss'
import { useEffect, useRef } from 'react'
import {
  swipeLeft,
  swipeRight,
  swipeUp,
} from './animations/transitions'

function App() {
  const home = useRef(null)
  const experience = useRef(null)
  const education = useRef(null)
  const more = useRef(null)

  //   useEffect(() => {
  //     swipeUp(home.current, more.current)
  //   }, [])

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
