import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 7%;
  letter-spacing: 0.0625em;
  font-size: 1.4rem;
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

    & span {
      margin-left: 1rem;
      font-weight: ${({ theme }) => theme.font.medium};
    }
  }
`
