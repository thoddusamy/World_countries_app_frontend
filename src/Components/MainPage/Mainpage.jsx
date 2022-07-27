import './MainPage.css'
import Card from '../Cards/Card'
import {
    faEarthAmericas,
    faSun,
    faMoon,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../config'

function App() {
    const [theme, setTheme] = useState("light")

    const themeSwitcher = () => {
        let themeChange = theme === "light" ? "dark" : "light";
        let saveLocal = localStorage.setItem('theme', themeChange);
        const getLocal = localStorage.getItem('theme')
        setTheme(getLocal)
    }

    let setLocalTheme = localStorage.getItem("theme")

    const [countryData, setCountryData] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        let fetchData = async () => {
            let getData = await axios.get(`${config.url}`)
            setCountryData(getData.data)
            console.log(getData.data);
        }
        fetchData()
    }, [])

    const handleSearchFilter = (value) => {
        setKeyword(value)
    }

    const filterCountries = countryData.filter((country) =>
        country.name.common.toLowerCase().includes(keyword) ||
        country.cca3.toLowerCase().includes(keyword) ||
        country.region.toLowerCase().includes(keyword)
    )

    return (
        <div className="container-fluid" data-theme={setLocalTheme}>
            <div className='container'>
                <div className='heading'>
                    <h1>World Countries <span><FontAwesomeIcon className='worldIcon' icon={faEarthAmericas} /></span></h1>
                    <div className='heading__theme'>
                        <span>Theme</span>
                        <button onClick={themeSwitcher}>
                            {setLocalTheme === "light" ? (
                                <FontAwesomeIcon className='themeIcon' icon={faSun} />
                            ) : (
                                <FontAwesomeIcon className='themeIcon' icon={faMoon} />
                            )}
                        </button>
                    </div>
                </div>
                <div className="searchBox">
                    <input type="text" placeholder='Filter By Country Name' onChange={(e) => handleSearchFilter(e.target.value.toLowerCase())} />
                    <button className='searchBtn'><FontAwesomeIcon className='themeIcon' icon={faMagnifyingGlass} /></button>
                </div>
                <div className="row container__row">
                    <Card filterCountries={filterCountries} />
                </div>
            </div>
        </div>
    )
}

export default App
