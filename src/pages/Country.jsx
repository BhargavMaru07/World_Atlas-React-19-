import React, { useEffect, useState, useTransition } from "react";
import Loader from "../components/Loader";
import { getCountryData } from "../api/Axios";
import CountryCard from "../components/CountryCard";
import SearchFilter from "../components/SearchFilter";

function Country() {
  //useTransition is a React Hook that lets you update the state without blocking the UI.so you can setup loader using this hook (use ispending for loader)
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      let res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  //searching and filter logic

  let searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country; // return true is also correct
  };

  let filterRegion = (country) => {
    if (filter === "all") return country; // return true is also correct
    return country.region === filter;
  };

  let filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Country;
