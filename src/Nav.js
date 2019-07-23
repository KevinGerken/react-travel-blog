import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav () {
    let [navVis, setNavVis] = useState(false);
    let [contactVis, setContactVis] = useState(false);
    const navigation = (<nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/Support">
            Support
          </Link>
        </li>
        <li>
          <Link to="/Gear">
            Gear
          </Link>
        </li>
        <li className="contact-button" onClick={() => setContactVis(!contactVis)}>
          Contact
          {contactVis && (
          <div className="contact-menu">
            <a href="#">
              Facebook
            </a>
            <a href="#">
              Youtube
            </a>
            <a href="#">
              Email
            </a>
          </div>
          )}
        </li>
      </ul>
    </nav>)

    return(
        <div>
        <MediaQuery maxWidth={480}>
        <div>
          <button  id="burger" onClick={() => setNavVis(!navVis)}>{navVis ? `X` : String.fromCharCode(9776)}</button>
          {navVis && <div>{navigation}</div>}
        </div>
      </MediaQuery>
      <MediaQuery minWidth={480}>
        <div className="nav-background">
        </div>
        <div>{navigation}</div>
      </MediaQuery>
      </div>

    )
}