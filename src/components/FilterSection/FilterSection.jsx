import React from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'
import { FilterContainer } from './FilterSection.style'

const FilterSection = ({ setSearchField, searchField, regions, setRegions}) => {
  return (
    <FilterContainer>
      <Input setSearchField={setSearchField} searchField={searchField} />
      <Select regions={regions} setRegions={setRegions}/>
    </FilterContainer>
  )
}

export default FilterSection
