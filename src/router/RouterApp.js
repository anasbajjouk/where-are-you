import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router, Switch } from 'react-router-dom'
import history from '../common/history'

//Themes
import theme from '../common/theme'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>

      </Switch>
    </Router>
  </ThemeProvider>
)

export default RouterApp
