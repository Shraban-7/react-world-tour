import {useState} from "react";


const Country = ({country,handeleVisitedCountries}) => {
    const {name,flags} = country;
    const [visited, setVisited] = useState(false);
    // console.log(country)
    
    function handelVisit() {
        setVisited(true)
    }

    const handleClick = () => {
        handeleVisitedCountries(country)
        handelVisit()
    }

    return (
        <div className="country">
            <img src={flags.svg} className="flags" alt="country flags"/>
            <h3>{name.common}</h3>
            {/*<button className="btn" onClick={handeleVisitedCountries}>Mark Visited</button>*/}
            {visited ? (<p>
                😎 Visited
            </p>):<button className="btn" onClick={handleClick}>Going</button>}
        </div>
    );
};

export default Country;