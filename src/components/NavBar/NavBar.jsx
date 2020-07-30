import React from 'react'
import { Link } from 'react-router-dom'

//Styles
import { NavBarContainer } from './NavBar.styles'

const NavBar = ({ theme, themeToggler }) => {
  return (
    <NavBarContainer darkMode={theme}>
      <h2>
        <Link to="/">Where in the world?</Link>
      </h2>
      {/* <ion-icon name="moon-outline"></ion-icon> */}
      <div className="theme_switch" onClick={themeToggler}>
        {theme === 'dark' ? (
          <>
            <ion-icon name="moon"></ion-icon>
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <ion-icon name="moon-outline"></ion-icon>
            <span>Light Mode</span>
          </>
        )}
      </div>
    </NavBarContainer>
  )
}

export default NavBar
