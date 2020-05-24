import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  faPlus,
  faHome,
  faStar,
  faClock,
  faStickyNote,
  faHistory,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Styles
import { SideMenuContainer, Container, UnorderedList } from './AsideMenu.styles'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'

const AsideMenu = () => {
  return (
    <SideMenuContainer>
      <Container>
        <Button>
          New Trip
          <Icon>
            <FontAwesomeIcon icon={faPlus} />
          </Icon>
        </Button>

        <UnorderedList>
          <NavLink to="/dashboard" activeClassName="active">
            <Icon pushToLeft>
              <FontAwesomeIcon icon={faHome} />
            </Icon>
            Home
          </NavLink>

          <NavLink to="/favorites" activeClassName="active">
            <Icon pushToLeft>
              <FontAwesomeIcon icon={faStar} />
            </Icon>
            <li>Favorites</li>
          </NavLink>

          <NavLink to="/plans" activeClassName="active">
            <Icon pushToLeft>
              <FontAwesomeIcon icon={faClock} />
            </Icon>
            <li>Planned</li>
          </NavLink>

          <NavLink to="/drafts" activeClassName="active">
            <Icon pushToLeft>
              <FontAwesomeIcon icon={faStickyNote} />
            </Icon>
            <li>Drafts</li>
          </NavLink>

          <NavLink to="/history" activeClassName="active">
            <Icon pushToLeft>
              <FontAwesomeIcon icon={faHistory} />
            </Icon>
            <li>History</li>
          </NavLink>
        </UnorderedList>
      </Container>
    </SideMenuContainer>
  )
}

export default AsideMenu
