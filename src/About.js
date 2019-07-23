import React from 'react';
import './About.css';
import judyImg from './images/judy.jpg';

export default function About() {
    return(
        <div>
        <main className="about-me">
            <article className="about">
            <img src={judyImg} alt="Judy seaside in white." />
            <div>
                <p>
                Judy Jones, No Permanent Address
                </p>
                <br />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas voluptatibus molestiae facilis optio. Eaque non laborum fugiat, corporis asperiores. Temporibus ipsa alias amet officiis vel nihil impedit repellat libero?
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corporis veritatis, nulla quo iste dicta expedita. Ipsa maxime aspernatur dolorum a at. Sit autem, ad consectetur ex sint aliquid rerum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptate, fuga aut consequuntur accusamus nostrum incidunt deleniti, sequi neque beatae facilis sit vero necessitatibus perspiciatis unde et voluptates ipsa saepe.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus optio vel esse pariatur officiis dignissimos tempora mollitia expedita hic, sit illo quibusdam temporibus. Nisi temporibus blanditiis aperiam laudantium, reprehenderit omnis?
                </p>
            </div>
            <section className="social-links">
                <ul className="flex-container">
                <li className="flex-container facebook">
                    <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li className="flex-container twitter">
                    <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li className="flex-container instagram">
                    <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="flex-container youtube">
                    <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                    </a>
                </li>
                </ul>
            </section>
            </article>
            <article id="map-container">
            <div id="map"></div>
            </article>
        </main>
        <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASHtorzqyJPLdDREPIjcpFSmPmdB0XfJ4&callback=initMap">
        </script>
        </div>
    )
}