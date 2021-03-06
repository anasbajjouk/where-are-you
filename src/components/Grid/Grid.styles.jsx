import styled from 'styled-components'

export const GridContainer = styled.div`
  /* overflow: hidden;
  display: flex;
  flex-flow: row wrap;

  justify-content: flex-start;   */
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 3rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto-fit, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 3rem;
  }
`
