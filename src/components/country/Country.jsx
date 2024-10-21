import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
        
    }

    return (
        <div className={`country ${visited ? 'visited': 'none-visited'}`}>
            <h3 style={{color: visited ? 'purple':'green'}}>country name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p>code : {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flags</button>
            <br />
            <button onClick={handleVisited}>{visited ?'visited' : 'going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;