import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ filterCountries }) => {
    return (
        <>
            {
                filterCountries.map((country, index) => {
                    return (
                        <>
                            <Link to={`/country/${country.cca3}`} className="col card_column" key={index}>
                                <div className="card__container">
                                    <img src={country.flags.svg} alt={country.name.common} />
                                    <div className="desc">
                                        <h5>Country: {country.name.common}</h5>
                                        <h5>Region: {country.region}</h5>
                                        <h5>Popu: {country.population}</h5>
                                        <h5>Area: {country.area}</h5>
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                })
            }
        </>
    )
}

export default Card




