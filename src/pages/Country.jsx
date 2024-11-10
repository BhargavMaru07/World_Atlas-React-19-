import React, { useEffect, useTransition } from "react";
import Loader from "../components/Loader";
import { getCountryData } from "../api/Axios";
import CountryCard from "../components/CountryCard";


function Country() {

const [isPending, startTransition] = useTransition();
const [countries, setCountries] = useState([]);


useEffect(()=>{
  startTransition(async ()=>{
    let res = await getCountryData()
    setCountries(res.data)
  })
},[])


if(isPending) return <Loader/>

  return ( 
  <section className="country-section">
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
  </section>
    )
}

export default Country;
