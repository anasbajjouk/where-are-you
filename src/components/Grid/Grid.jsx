import React from 'react'
import { GridContainer } from './Grid.styles'
import Card from '../Card/Card'

const Grid = ({ countries }) => {
  return (
    <GridContainer>
      {countries.map((country, i) => (
        <Card key={i + 50} country={country} />
      ))}
    </GridContainer>
  )
}

export default Grid
