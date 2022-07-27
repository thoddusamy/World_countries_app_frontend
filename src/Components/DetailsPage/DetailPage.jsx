import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.css'
import { config } from '../../config'

const DetailPage = () => {

    const { code } = useParams()
    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const getData = await axios.get(`${config.url}`)
            setCountryData(getData.data)
        }
        fetchData()
    }, [])


    const filterDetailCountry = countryData.filter((detailCountry) =>
        detailCountry.cca3.includes(code)
    )
    console.log(filterDetailCountry);

    let localTheme = localStorage.getItem('theme')

    return (
        <>
            {
                filterDetailCountry.map((filteredCountry) => {
                    return (
                        <div className="container-fluid" data-theme={localTheme}>
                            <div className="container">
                                <div className="row detailCountry">
                                    <div className="col detailCountry_col_left">
                                        <img src={filteredCountry.flags.svg} alt="" />
                                        <div className="detailCountry_desc">
                                            <h5>{filteredCountry.name.common}</h5>
                                            <h5>Region: {filteredCountry.region}</h5>
                                            <h5>Population: {filteredCountry.population}</h5>
                                            <h5>Area(Km<sup>2</sup>): {filteredCountry.area}</h5>
                                        </div>
                                    </div>
                                    <div className="col detailCountry_col_right">
                                        <h3>Details of {filteredCountry.name.common}</h3>
                                        <div className='detailCountry_col_right__desc_container'>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Country Name</span>
                                                <span>{filteredCountry.name.common}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Official Name</span>
                                                <span>{filteredCountry.name.official}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Capital</span>
                                                <span>{filteredCountry.capital}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Country Code</span>
                                                <span>{filteredCountry.cca3}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Continent</span>
                                                <span>{filteredCountry.continents}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Area (Km<sup>2</sup>)</span>
                                                <span>{filteredCountry.area}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Latitude</span>
                                                <span>{filteredCountry.latlng[0]}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Longitude</span>
                                                <span>{filteredCountry.latlng[1]}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Location</span>
                                                <a href={filteredCountry.maps.googleMaps}>{filteredCountry.maps.googleMaps}</a>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Population</span>
                                                <span>{filteredCountry.population}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Region</span>
                                                <span>{filteredCountry.region}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Sub Region</span>
                                                <span>{filteredCountry.subregion}</span>
                                            </div>
                                            <div className='detailCountry_col_right__desc'>
                                                <span>Times Zones</span>
                                                <span>{filteredCountry.timezones}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DetailPage