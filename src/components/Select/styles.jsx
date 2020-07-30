import styled from 'styled-components'

export const SelectContainer = styled.select`
  height: 42px;
  border-radius: 5px;
  outline: none;
  border: none;
  width: 10%;
  background-color: ${({ theme }) => theme.elements};
  padding: 10px;
  box-shadow: ${({ mytheme }) =>
    mytheme === 'light'
      ? '2px 3px 5px -10px hsl(0, 0%, 52%)'
      : `2px 3px 5px -10px black`};
  color: inherit;
  overflow: hidden;
`
