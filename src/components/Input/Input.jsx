import React from 'react'
import {} from '@fortawesome/fontawesome-svg-core'
import { SearchContainer } from './styles'

const Input = ({ mytheme }) => {
  return (
    <SearchContainer>
      <span className="search_icon">
        <ion-icon name="search" ></ion-icon>
      </span>

      <input
        type="search"
        id="countryName"
        name="countryName"
        placeholder="Search for a country"
        mytheme={mytheme}
      />
    </SearchContainer>
  )
}

export default Input
