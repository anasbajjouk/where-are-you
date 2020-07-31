import React from 'react'
import { SearchContainer } from './styles'

const Input = ({ mytheme, setSearchField, searchField }) => {
  return (
    <SearchContainer>
      <span className="search_icon">
        <ion-icon name="search"></ion-icon>
      </span>

      <input
        type="search"
        id="countryName"
        name="countryName"
        placeholder="Search for a country"
        mytheme={mytheme}
        onChange={(event) => setSearchField(event.target.value)}
        value={searchField}
      />
    </SearchContainer>
  )
}

export default Input
