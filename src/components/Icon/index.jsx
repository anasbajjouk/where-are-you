import styled, { css } from 'styled-components'
import { space, color, height, width } from 'styled-system'

export default styled.i`
  display: inline-flex;
  align-items: center;
  font-size: unset;
  font-family: unset;
  ${space};
  ${color};
  ${height};
  ${width};

  ${({ pushToRight }) =>
    pushToRight &&
    css`
      margin-left: 10px;
    `};

  ${({ pushToLeft }) =>
    pushToLeft &&
    css`
      margin-right: 10px;
    `};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `};
`
