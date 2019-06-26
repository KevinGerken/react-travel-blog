import React, {useState} from 'react';
import MediaQuery from 'react-responsive';
import ParallaxHeader from './ParallaxHeader';
import './Header.css';

export default function Header() {
    let [navVis, setNavVis] = useState(false);
    let [contactVis, setContactVis] = useState(false);
    const navigation = (<nav>
      <ul>
        <li>
          <a href="index.html">
            Home
          </a>
        </li>
        <li>
          <a href="aboutme.html">
            About Me
          </a>
        </li>
        <li>
          <a href="aboutyou.html">
            Support
          </a>
        </li>
        <li>
          <a href="gear.html">
            Gear
          </a>
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
        <header className="Header">
            <ParallaxHeader />
            <h1>
            No Permanent Address
            </h1>
            <h2>
            Judy Jones
            </h2>
            <p>
            Judy's traveling the world to find out what makes her tick.
            </p>
        </header>
        
        <MediaQuery maxWidth={480}>
          <div>
            <button  id="burger" onClick={() => setNavVis(!navVis)}>{navVis ? `X` : String.fromCharCode(9776)}</button>
            {navVis && <div>{navigation}</div>}
          </div>
        </MediaQuery>
        <MediaQuery minWidth={580}>
          <div style={{display: 'block', position: 'relative'}}>
          <div className="nav-background">
            
          </div>
          <div style={{position: 'sticky', top: 0}}>{navigation}</div>
          </div>
        </MediaQuery>
        </div>
    )
}