import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './assets/scss/reset.scss'
import './assets/scss/base.scss'
import Provider from './context/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
