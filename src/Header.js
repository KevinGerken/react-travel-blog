import React, {useState} from 'react';
import ParallaxHeader from './ParallaxHeader';
import './Header.css';

export default function Header() {
    return(
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
        
    )
}