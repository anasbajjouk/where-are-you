import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: row wrap;
  padding: 30px 0 50px 0;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    flex-direction: column;
  }
`
