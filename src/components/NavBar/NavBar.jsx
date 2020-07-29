import React from 'react'
import { NavBarContainer } from './NavBar.styles'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <NavBarContainer>
      <h2>
        <Link to="/">Where in the world?</Link>
      </h2>
      {/* <ion-icon name="moon-outline"></ion-icon> */}
      <div className="theme_switch">
        <ion-icon name="moon"></ion-icon>
        <span>DarkMode</span>
      </div>
    </NavBarContainer>
  )
}

export default NavBar
