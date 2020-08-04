import React, { useEffect, useState } from 'react'
import { LeftSide, RightSide, DetailContainer, Borders } from './styles'
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

  const borderNames = borders && borders.map((b) => b + ';').join('')

  console.log('borders', borders)
  useEffect(() => {
    const fetchData = async () => {
      if (borderNames) {
        const response = await fetch(URI + `alpha?codes=${borderNames}`)
        const data = await response.json()
        setBorderCountries(data)
      }
      return null
    }
    fetchData()
  })

  return (
    <DetailContainer>
      <LeftSide>
        <button onClick={() => window.history.back()}>Back</button>
        <img src={flag} alt={country} />
      </LeftSide>
      <RightSide>
        <h3>{country}</h3>
        <div className="country_info-properties">
          <div className="country_info-properties-detail">
            <div>
              Native Name: <span>{nativeName}</span>
            </div>
            <div>
              Population: <span>{population.toLocaleString()}</span>
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

          <div className="country_info-properties-detail">
            <div className="topLevel">
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

        <Borders>
          <span className="border_title"> Border Countries:</span>

          {borderCountries.length > 1
            ? borderCountries.map((bc) => (
                <span className="borders">{bc.name + ' '}</span>
              ))
            : 'None'}
        </Borders>
      </RightSide>
    </DetailContainer>
  )
}

export default withRouter(CountryDetails)
