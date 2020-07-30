import React from 'react'
import { SelectContainer } from './styles'

const Select = ({mytheme}) => {
  return (
    <SelectContainer mytheme={mytheme}>
      <option value="">Filter by Region</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </SelectContainer>
  )
}

export default Select
