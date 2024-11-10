import React, { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryIndividualData } from "../api/Axios";
import Loader from "./Loader";

function CountryDetail() {
  let { id } = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        let res = await getCountryIndividualData(id);
        if (res.status === 200) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch country data:", error);
      }
    });
  }, [id]);

  if (isPending || !country) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags?.svg}
              alt={country.flags?.alt || "Flag"}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {country.name?.official || "N/A"} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names:</span>
                  {country.name?.nativeName
                    ? Object.keys(country.name.nativeName)
                        .map((key) => country.name.nativeName[key].common)
                        .join(", ")
                    : "N/A"}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {country.population
                    ? country.population.toLocaleString()
                    : "N/A"}
                </p>
                <p>
                  <span className="card-description">Region:</span>
                  {country.region || "N/A"}
                </p>
                <p>
                  <span className="card-description">Sub Region:</span>
                  {country.subregion || "N/A"}
                </p>
                <p>
                  <span className="card-description">Capital:</span>
                  {country.capital ? country.capital.join(", ") : "N/A"}
                </p>
                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld ? country.tld[0] : "N/A"}
                </p>
                <p>
                  <span className="card-description">Currencies:</span>
                  {country.currencies
                    ? Object.keys(country.currencies)
                        .map((curElem) => country.currencies[curElem].name)
                        .join(", ")
                    : "N/A"}
                </p>
                <p>
                  <span className="card-description">Languages:</span>
                  {country.languages
                    ? Object.keys(country.languages)
                        .map((key) => country.languages[key])
                        .join(", ")
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;

//toLocaleString() in detail:-
// const number = 1234567.89;
// console.log(number.toLocaleString()); // Output might be "1,234,567.89" in the US or "1.234.567,89" in some European countries
// console.log(number.toLocaleString("de-DE")); // "1.234.567,89" (German formatting)
// console.log(number.toLocaleString("en-US")); // "1,234,567.89" (US English formatting)
