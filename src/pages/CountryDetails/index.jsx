import React from 'react'
import {} from './styles'
import { withRouter } from 'react-router-dom'

const CountryDetails = ({ location }) => {
  const {
    state: { country },
  } = location

  return <div>{country}</div>
}

export default withRouter(CountryDetails)
