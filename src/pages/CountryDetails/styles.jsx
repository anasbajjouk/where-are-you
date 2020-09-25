import styled from 'styled-components'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2% 7%;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.typography.detailPage};

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & button {
    border: none;
    outline: none;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.elements};
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    margin-bottom: 50px;
    width: 120px;
    box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.shadow};
    cursor: pointer;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobileS}) {
      margin-top: 30px;
    }

    &:hover,
    &:focus,
    &:active {
      transform: translateY(1px);
    }
  }

  & img {
    width: 500px;
    overflow: hidden;
    background: none;
    background-repeat: no-repeat;
    object-fit: contain;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.mobileS}) {
      width: 300px;
    }
  }
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;

  & h3 {
    margin-bottom: 50px;
    font-size: 40px;
  }

  & .country_info-properties {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    & .country_info-properties-detail {
      & div {
        margin-bottom: 8px;
        font-weight: ${({ theme }) => theme.font.bold};
        & span {
          margin-left: 5px;
          font-weight: ${({ theme }) => theme.font.regular};
        }
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    width: 100%;

    & h3 {
      margin-top: 30px;
      margin-bottom: 30px;
      font-size: 30px;
    }

    & .country_info-properties {
      flex-flow: column;

      & .country_info-properties-detail {
        & .topLevel {
          margin-top: 35px;
        }
      }
    }
  }
`

export const Borders = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  align-content: center;

  & .borders {
    background-color: ${({ theme }) => theme.elements};
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.shadow};
    text-align: center;
    padding: 5px;
    align-self: baseline;

    &:not(:last-child) {
      margin-right: 10px;
      margin-bottom: 20px;
    }
  }

  & .border_title {
    margin-right: 10px;
    font-weight: ${({ theme }) => theme.font.bold};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobileS}) {
    & .border_title {
      flex-basis: 100%;
      margin-bottom: 15px;
    }
  }
`
