import {useEffect, useState} from "react";
import Country from "./Country.jsx";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => setCountries(data))
    }, [])

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('my visited countries is ',country)
        const newVistedCountirs = [...visitedCountries, country];
        setVisitedCountries(newVistedCountirs);
        // console.log(visitedCountries)
    }
    return (
        <div className="container">
            <h1 className="title"> counties {countries.length}< /h1>
            <h1 className="title">Visited counties {visitedCountries.length}< /h1>
            <div className="country-flags-container">
                {visitedCountries.map((country, index) => (
                    <img key={index} className="flags" src={country.flags.svg} alt={country.name.common} />
                ))}
            </div>


            <div className="countries-container">
                {
                    countries.map((country,index) => (<Country handeleVisitedCountries={handleVisitedCountries} key={index} country={country}/>))
                }
            </div>
        </div>
    )
        ;
};

export default Countries;