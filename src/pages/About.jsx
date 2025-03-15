import React from "react";
import CountryData from "../api/CountryData.json"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {

  useGSAP(()=>{
    gsap.from(".about-heading", {
      y:50,
      opacity:0,
      duration:0.8,
      delay:0.3
    });

   gsap.from(".about-card", {
     y: 50,
     opacity: 0,
     duration: 0.8,
     delay: 0.3,
     scrollTrigger: {
       trigger: ".about-card",
       start: "top 80%",
       end: "top 65%",
       scrub: 1, 
       markers:true
     },
   });
  })
  return (
    <section className="section-about container">
      <h2 className="container-title about-heading">
        Here are the Interesting Facts <br /> we're proud of
      </h2>

      <div className="gradient-cards">
       {CountryData.map((data)=>{
          const { id, countryName, capital, population, interestingFact } = data;
          return (
            <div className="card about-card" key={id}>
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
