import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import './index.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const basename =
  process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL
root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
)
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('PUBLIC_URL:', process.env.PUBLIC_URL)
console.log('Current path:', window.location.pathname)
