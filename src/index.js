import React from 'react'
import ReactDOM from 'react-dom'
import RouterApp from './router/RouterApp'

//Styles
import './assets/css/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
  document.getElementById('root')
)
