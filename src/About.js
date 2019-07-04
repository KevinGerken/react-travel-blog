import React from 'react';
import judyImg from './images/judy.jpg';
import './About.css';

export default function About() {
    return(
        <div>
        <main class="about-me">
            <article class="about">
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
            <section class="social-links">
                <ul class="flex-container">
                <li class="flex-container facebook">
                    <a href="https://www.facebook.com/">
                    <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li class="flex-container twitter">
                    <a href="https://twitter.com/">
                    <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="flex-container instagram">
                    <a href="https://www.instagram.com/">
                    <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li class="flex-container youtube">
                    <a href="https://www.youtube.com/">
                    <i class="fab fa-youtube"></i>
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