import React from "react";
import CountryData from "../api/CountryData.json"

function About() {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts <br /> we're proud of
      </h2>

      <div className="gradient-cards">
       {CountryData.map((data)=>{
          const { id, countryName, capital, population, interestingFact } = data;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-yellow-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
       })}
      </div>
    </section>
  )
}

export default About;
