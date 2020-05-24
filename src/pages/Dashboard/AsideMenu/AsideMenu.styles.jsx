import styled from 'styled-components'

export const SideMenuContainer = styled.div`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  width: 24rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  & button {
    display: flex;
    justify-content: space-between;
  }
`

export const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  & a {
    display: inline-flex;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.colors.nav};
    &:last-child {
      padding-bottom: 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.placeholder};
    }

    &.active {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
