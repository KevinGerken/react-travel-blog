import React, { useEffect, useState } from 'react';
import './ParallaxHeader.css';

export default function ParallaxHeader(props) {
    const headerBackgrounds = {
        [`/`]: `images/home.jpg`,
        [`/About`]: `images/aboutme.jpg`,
        [`/Gear`]: `images/gear.jpg`,
        [`/Support`]: `images/beach.jpg`,
        [`/article`]: `../images/cuba.jpg`
    }
    const background = headerBackgrounds[props.pathname];
    let [scroll, setScroll] = useState(0);
    let style = {transform: `translateY(${scroll}px)`, backgroundImage: `url(${background})`};
    
    function scrollHandler() {
        setScroll(-window.pageYOffset / 2);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
           window.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    return(
        <div>
            <div className="header-parallax" style={style}> </div> 
        </div>
    )
}