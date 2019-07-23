import React from 'react';
import './Header.css';
import ParallaxHeader from './ParallaxHeader';

export default function Header(props) {
    const pathname = props.location.pathname.substring(0, 8);
    return(
        <header className="Header">
            <ParallaxHeader pathname={pathname}/>
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
        
    )
}