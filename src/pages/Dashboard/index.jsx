import React, { useEffect, useState } from 'react'

//Styles
import { DashboardContainer } from './styles'
import FilterSection from '../../components/FilterSection/FilterSection'

// import fetchData from '../../api'
import Grid from '../../components/Grid/Grid'

const Dashboard = () => {
  const [countries, setCountries] = useState([])
  const URI = 'https://restcountries.eu/rest/v2/'
  
  useEffect(() => {
    const fetchData = async (name) => {
      const response = await fetch(URI + 'all')
      const data = await response.json()
      setCountries(data)
    }
    fetchData()
  }, [])

  console.log(countries)
  return (
    <DashboardContainer>
      <FilterSection />
      <Grid countries={countries} />
    </DashboardContainer>
  )
}

export default Dashboard
