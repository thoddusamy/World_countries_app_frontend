import { createContext, useState } from "react";

export const ContextApi = createContext()

export const Provider = ({ children }) => {

    const [countryData, setCountryData] = useState([])

    return (
        <ContextApi.Provider value={{ countryData, setCountryData }}>
            {children}
        </ContextApi.Provider>
    )
}