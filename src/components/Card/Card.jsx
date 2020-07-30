import React from 'react'

import { CardContainer } from './Card.styles'

const Card = ({ country }) => {
  const { flag, name, region, population, capital } = country

  return (
    <>
      <CardContainer>
        <div className="country_image">
          <img src={flag} alt={name} />
        </div>
        <div className="country_info">
          <h5 className="country_info-title">{name.toUpperCase()}</h5>
          <div className="country_info-properties">
            <div>
              Population: <span>{population}</span>
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

export default Card
