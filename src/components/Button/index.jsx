import styled from 'styled-components'
import {
  color,
  border,
  fontWeight,
  fontSize,
  borderColor,
  space,
  width,
  maxWidth,
  background,
  minWidth,
} from 'styled-system'

export default styled.button`
  margin: 0.7rem 0 1.5rem 0;
  font-size: 1.6rem;
  padding: 0 2rem;
  height: 4rem;
  border-radius: 1rem;
  letter-spacing: -0.28px;
  /* min-width: 12rem; */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  text-align: center;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  transition: all 0.4s ease;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }

  * {
    text-transform: none;
  }

  ${fontSize};
  ${color};
  ${border};
  ${fontWeight};
  ${borderColor};
  ${space};
  ${width};
  ${maxWidth};
  ${minWidth};
  ${background};
`
