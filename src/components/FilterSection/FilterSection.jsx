import React from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'
import { FilterContainer } from './FilterSection.style'

const FilterSection = () => {
  return (
    <FilterContainer>
      <Input />
      <Select />
    </FilterContainer>
  )
}

export default FilterSection
