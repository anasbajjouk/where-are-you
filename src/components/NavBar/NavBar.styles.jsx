import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 7%;
  & a {
    color: inherit;
  }

  & .theme_switch {
    display: flex;
    align-content: center;
    align-items: center;

    & span{
        margin-left: 10px;
    }
  }
`
