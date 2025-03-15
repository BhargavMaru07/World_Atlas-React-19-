import { FaLongArrowAltRight } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-heading, .hero-pera, .hero-btn",
      { y: 30, opacity: 0 }, // Initial state
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, stagger: 0.08 } // Final state
    );

    gsap.fromTo(
      ".hero-image",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
    );
  });

  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl hero-heading">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph hero-pera">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to={"/country"}>
            <button className="btn btn-darken btn-inline bg-white-box hero-btn">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="Hero Image"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
