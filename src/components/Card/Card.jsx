import React from 'react'
import { withRouter } from 'react-router'

import { CardContainer } from './Card.styles'

const Card = ({ country, history }) => {
  const { flag, name, region, population, capital } = country

  const handleClick = () => {
    history.push({
      pathname: 'country/' + name.trim(),
      state: { country: name },
    })
  }

  return (
    <>
      <CardContainer onClick={handleClick}>
        <div className="country_image">
          <img src={flag} alt={name} />
        </div>
        <div className="country_info">
          <h5 className="country_info-title">{name.toUpperCase()}</h5>
          <div className="country_info-properties">
            <div>
              Population: <span>{population.toLocaleString()}</span>
            </div>
            <div>
              Region: <span>{region}</span>
            </div>
            <div>
              Capital: <span>{capital}</span>
            </div>
          </div>
        </div>
      </CardContainer>
    </>
  )
}

export default withRouter(Card)
