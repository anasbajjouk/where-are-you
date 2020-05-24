import React, { useState } from 'react'
import { withRouter } from 'react-router'
//Styles
import { AppContainer, Link, Header, Form, List, Span } from './Login.styles'
import Button from '../../components/Button'

const Login = ({ history }) => {
  const [state, setState] = useState({
    name: '',
    checkbox: false,
    errors: false,
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheck = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.name.length <= 0 || state.checkbox === false) {
      return alert('Please fill the form')
    }
    return history.push('/dashboard')
  }

  return (
    <AppContainer>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h1>Login</h1>
        </Header>
        <List>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleChange}
          />
        </List>
        <Span>
          <input
            type="checkbox"
            name="checkbox"
            checked={state.checkbox}
            onChange={handleCheck}
          />
          Agree with &nbsp;
          <Link href="/termsandconditions">Terms & Conditions</Link>
        </Span>

        {state.name.length > 0 && (
          <Button type="submit" width="100%">
            Login
          </Button>
        )}
      </Form>
    </AppContainer>
  )
}

export default withRouter(Login)
