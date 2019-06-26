import React, {useState, useEffect} from 'react';
import './ParallaxHeader.css';
import Background from './images/home.jpg';

export default function ParallaxHeader() {
    let [scroll, setScroll] = useState(0);
    let style = {transform: `translateY(${scroll}px)`, background: `url(${Background}) center`};
    
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