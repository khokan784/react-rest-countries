import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedFlags = flags =>{
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h3>countries {countries.length}</h3>
            <div>
                {/* visited country */}
                <h4>visited countries : {visitedCountries.length}</h4>
                <ul>
                    {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flags-container">
                {
                    visitedFlags.map(flag=> <img src={flag}></img>)
                }
            </div>
            {/* display country */}
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountry={handleVisitedCountry} 
                        country={country}
                        handleVisitedFlags={handleVisitedFlags}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;