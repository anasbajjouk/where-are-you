import styled from 'styled-components'

export const SearchContainer = styled.div`
  position: relative;

  & .search_icon {
    position: absolute;
    top: 25%;
    left: 5px;
    padding-left: 10px;
  }

  & input {
    text-indent: 40px;
    padding: 20px 0;
    height: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    width: 400px;
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
