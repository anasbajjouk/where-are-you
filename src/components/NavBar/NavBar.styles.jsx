import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  /* @media only screen and (min-width: ${({ theme }) =>
    theme.breakpoints.mobileS}) {
    height: 10vh;
    letter-spacing: 0;
    font-size: 1rem;
  } */

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 7%;
  /* letter-spacing: 0.0625em; */
  font-size: 1.2rem;
  height: 7vh;
  box-shadow: ${({ darkMode }) =>
    darkMode === 'dark'
      ? '0px 3px 4px 1px hsl(209, 23%, 22%)'
      : '0px 2px 162px -20px hsl(0, 0%, 52%)'};

  & a {
    color: inherit;
  }

  & .theme_switch {
    display: flex;
    align-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;

    & span {
      margin-left: 1rem;
      font-weight: ${({ theme }) => theme.font.medium};
    }
  }
`
