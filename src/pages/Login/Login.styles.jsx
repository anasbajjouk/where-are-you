import styled from 'styled-components'


export const AppContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: inherit;
  padding: 1rem;
  padding: 3rem;
`

export const Header = styled.div`
  text-align: justify;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
  & h1 {
    font-size: 3.6rem;
    margin: -1rem;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
  width: 100%;
`

export const List = styled.li`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;

  & input[type='text'] {
    border: 1px solid ${({ theme }) => theme.colors.placeholder};
    border-radius: 3px;
    margin: 0.7rem 0 1.5rem 0;
    width: 100%;
    height: 3rem;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.default};

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.blue};
      caret-color: ${({ theme }) => theme.colors.blue};
    }

    &:placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.7rem 0 1.5rem 0;
  width: 100%;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.headline};

  & input[type='checkbox'] {
    margin-right: 1rem;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.4rem')};
  text-decoration: none;
  outline: none;
  cursor: pointer;
`
