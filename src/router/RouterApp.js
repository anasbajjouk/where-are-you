import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../common/history'
import { useDarkMode } from '../hooks/useDarkMode'

//Theme
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyles'

//Components
import Page404 from '../pages/page-404/page-404.component'
import Dashboard from '../pages/Dashboard'
import NavBar from '../components/NavBar/NavBar'

const RouterApp = () => {
  const [myTheme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode =
    myTheme === 'light'
      ? { ...theme.lightTheme, ...theme }
      : { ...theme.darkTheme, ...theme }

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <Router history={history}>
        <GlobalStyles />
        <NavBar />
        <button onClick={themeToggler}>Switch</button>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          {/* <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/favorites" component={Dashboard} />
        <Route exact path="/plans" component={Dashboard} />
        <Route exact path="/drafts" component={Dashboard} />
        <Route exact path="/history" component={Dashboard} /> */}
          <Route component={Page404} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default RouterApp
