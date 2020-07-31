import React, { useEffect, useState } from 'react'

//Styles
import { DashboardContainer } from './styles'
import FilterSection from '../../components/FilterSection/FilterSection'

// import fetchData from '../../api'
import Grid from '../../components/Grid/Grid'

const Dashboard = () => {
  const [countries, setCountries] = useState([])
  const [searchField, setSearchField] = React.useState('')
  const [regions, setRegions] = React.useState('')

  const URI = 'https://restcountries.eu/rest/v2/'

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URI + 'all')
      const data = await response.json()
      setCountries(data)
    }
    fetchData()
  }, [])

  // const countryNameCapitalized =
  //   searchField.charAt(0).toUpperCase() + searchField.slice(1)

  const allRegions = () => {
    const regions = countries.map((c) => c.region)
    const regionSet = new Set(regions)

    const filtered = [...regionSet].filter((el) => el !== '')
    return filtered
  }

  const filteredCountries = React.useMemo(
    () =>
      countries.filter((country) => {
        let countryNameLowerCased = searchField.toLowerCase()
        let countryName = country.name.toLowerCase()
        let region = country.region.toLowerCase()
        let regionLowerCased = regions.toLowerCase()

        if (
          region.indexOf(regionLowerCased) > -1 &&
          countryName.indexOf(countryNameLowerCased) > -1
        ) {
          return country
        }

        return null
      }),
    [countries, regions, searchField]
  )

  return (
    <DashboardContainer>
      <FilterSection
        setSearchField={setSearchField}
        searchField={searchField}
        regions={allRegions()}
        setRegions={setRegions}
      />
      <Grid countries={filteredCountries} />
    </DashboardContainer>
  )
}

export default Dashboard
