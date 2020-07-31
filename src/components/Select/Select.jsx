import React from 'react'
import { SelectContainer } from './styles'

const Select = ({ mytheme, regions, setRegions }) => {
  return (
    <SelectContainer
      mytheme={mytheme}
      onChange={(event) => setRegions(event.target.value)}
    >
      <option value="">Filter by Region</option>
      {regions.map((region, i) => (
        <option key={i + 1000} value={region}>
          {region}
        </option>
      ))}
    </SelectContainer>
  )
}

export default Select
