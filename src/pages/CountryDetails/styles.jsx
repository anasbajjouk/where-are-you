import styled from 'styled-components'

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    background-color: red;
    border: none;
    outline: none;
    padding: 5px 20px;
  }

  & img {
    width: 500px;
    overflow: hidden;
    background-color: red;
    background-repeat: no-repeat;
    object-fit: contain;
  }
`
