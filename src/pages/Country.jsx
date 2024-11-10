import React, { useEffect, useState, useTransition } from "react";
import Loader from "../components/Loader";
import { getCountryData } from "../api/Axios";
import CountryCard from "../components/CountryCard";
import { NavLink } from "react-router-dom";

function Country() {
  //useTransition is a React Hook that lets you update the state without blocking the UI.so you can setup loader using this hook (use ispending for loader)
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      let res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Country;
