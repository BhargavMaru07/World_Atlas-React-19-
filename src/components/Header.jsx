import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  useGSAP(()=>{
    gsap.from(".title,.nav-li", {
      y: -50,
      opacity: 0,
      duration: 0.5,  
      delay: 0.3,
      stagger:0.08
    });
  })

  let handleBtnToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1 className="title">WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li className="nav-li">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "blue" : null)}
                  onClick={handleBtnToggle}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "blue" : null)}
                  onClick={handleBtnToggle}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink
                  to="/country"
                  className={({ isActive }) => (isActive ? "blue" : null)}
                  onClick={handleBtnToggle}
                >
                  Country
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "blue" : null)}
                  onClick={handleBtnToggle}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink
                  to="/population"
                  className={({ isActive }) => (isActive ? "blue" : null)}
                  onClick={handleBtnToggle}
                >
                  Population
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleBtnToggle}>
              {show ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
