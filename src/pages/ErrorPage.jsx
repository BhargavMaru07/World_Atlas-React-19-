import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
import '../error.css'

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
  return (
    <>
      <body className="err-body">
        <div className="err-container">
          <div className="err-text-section">
            <h1>So Sorry!</h1>
            <p>The page you are looking for cannot be found <br />{error.data}</p>
            <div className="err-reasons">
              <p>Possible Reasons</p>
              <ul>
                <li>The address may have been typed incorrectly;</li>
                <li>It may be a broken or outdated link.</li>
              </ul>
            </div>
            <div className="err-buttons">
              <NavLink to={"/"}>
                <button className="err-home-button">Go Back</button>
              </NavLink>
            </div>
          </div>
          <div className="err-image-section">
            <div className="err-circle">
              <img
                src="https://storage.googleapis.com/a1aa/image/k4LA2ggv4LJWOdR2B1Mqo2NA5tQavmy3hVejeLQ5GBl877uTA.jpg"
                alt="Sad envelope with scattered letters and clouds"
              />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default ErrorPage