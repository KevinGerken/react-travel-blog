import React from 'react';
import './Footer.css';
import PalmTree from './images/palm.png';

export default function Footer() {
    return(
        <footer>
          <div className="flex-container">
            <img className="flip" src={PalmTree} alt="A palm tree." />
            <section>
              <p>
                Email:
              </p>
              <p>
                <a href="#">
                  <span>noone@</span><span>gmail.com</span>
                </a>
              </p>
            </section>
            <section>
              <p>
                Youtube
              </p>
              <p>
                <a href="#">
                  No Permanent <span>Address</span>
                </a>
              </p> 
            </section>
            <section className="support-section">
              <p>
                Support
              </p>
              <p>
                <a href="https://www.patreon.com/">
                  Patreon
                </a>
              </p>
              <p>
                <a href="https://www.paypal.com">
                  Paypal
                </a>
              </p>
            </section>
            <img src={PalmTree} alt="A palm tree." />
          </div>
        </footer>
    )
}