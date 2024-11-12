import React from 'react'
import footerContact from '../api/FooterApi.json'
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';
import { NavLink } from "react-router-dom";


function Footer() {

  //aa badha icon as a component hoi che and json file ma component ne add no kari sakay so avi rite object banavi ne icon add karvana
  const footerIcon = {
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus/>
  }
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((currdata, index) => {
          const { icon, title, details } = currdata;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon"> {footerIcon[icon]}</div>{" "}
              {/* footerIcon.icon it's wrong , so we use dynamic */}
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>


      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved DevStorm
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/bhargav_maru_06/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/country"
                  >
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer