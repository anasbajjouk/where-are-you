import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../common/history'

//Theme
import theme from '../common/theme'

//Components
import Login from '../pages/Login/Login'
import Page404 from '../pages/page-404/page-404.component'
import Dashboard from '../pages/Dashboard'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/favorites" component={Dashboard} />
        <Route exact path="/plans" component={Dashboard} />
        <Route exact path="/drafts" component={Dashboard} />
        <Route exact path="/history" component={Dashboard} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default RouterApp
