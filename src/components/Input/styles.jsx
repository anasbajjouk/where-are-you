import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  margin-right: 800px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    flex-grow: 2;
    margin-right: 0;
    margin-bottom: 10px;
  }

  & .search_icon {
    position: absolute;
    top: 25%;
    left: 5px;
    padding-left: 10px;
  }

  & input {
    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobileS}) {
      flex-grow: 1;
    }
    flex-grow: 1;
    text-indent: 40px;
    padding: 20px 0;
    height: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.elements};
    box-shadow: ${({ theme, mytheme }) =>
      mytheme === 'light'
        ? '2px 3px 5px -10px hsl(0, 0%, 52%)'
        : `2px 3px 5px -10px black`};
    color: inherit;

    &::placeholder {
      color: ${({ theme }) => theme.text};
      opacity: 0.5;
    }
  }
`
