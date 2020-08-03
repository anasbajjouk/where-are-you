import React, { useEffect, useState } from 'react'
import { LeftSide } from './styles'
import { withRouter } from 'react-router-dom'

const CountryDetails = ({ location }) => {
  const [borderCountries, setBorderCountries] = useState([])
  const {
    state: {
      country,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      flag,
      borders,
    },
  } = location

  const URI = 'https://restcountries.eu/rest/v2/'

  const borderNames = borders.map((b) => b + ';').join('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URI + `alpha?codes=${borderNames}`)
      const data = await response.json()
      setBorderCountries(data)
    }
    fetchData()
  }, [])

  return (
    <div style={{ padding: '2% 7%' }}>
      <LeftSide>
        <button>Back</button>
        <img src={flag} alt={country} />
      </LeftSide>

      <h3>{country}</h3>
      <div className="country_info-properties">
        <div>
          <div>
            Native Name: <span>{nativeName}</span>
          </div>
          <div>
            Population: <span>{population}</span>
          </div>
          <div>
            Region: <span>{region}</span>
          </div>
          <div>
            Sub Region: <span>{subregion}</span>
          </div>
          <div>
            Capital: <span>{capital}</span>
          </div>
        </div>

        <div>
          <div>
            Top Level Domain: <span>{topLevelDomain}</span>
          </div>
          <div>
            Currencie(s): <span>{currencies.map((c) => c.name + ' ')}</span>
          </div>
          <div>
            Languages: <span>{languages.map((l) => l.name + ' ')}</span>
          </div>
        </div>
      </div>

      <div className="border_countries">
        Border Countries:
        {borderCountries.map((bc) => (
          <span>{bc.name + ' '}</span>
        ))}
      </div>
    </div>
  )
}

export default withRouter(CountryDetails)
