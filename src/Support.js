import React from 'react';
import './Support.css';

export default function Support() {
    return(
        <main class="about-you">
            <h1>
            Get behind the scenes info
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt perspiciatis ipsam, voluptas asperiores aliquam, magnam cumque, quam suscipit quos iste veniam! Doloribus iste vel quo consequatur perspiciatis ab minima!
            </p>
            <p>
            Without people like you this blog would not and could not exist. Thank You!
            </p>
            <div class="flex-container">
            <img src="images/monkey.jpg" alt="A monkey sitting on the beach." />
            <img src="images/tuk.jpg" alt="A colorful tuk tuk." />
            </div>
            <section class="patreon support">
            <div>
                <a href="https://www.patreon.com/">
                <img src="images/patreon.png" alt="Support my work on Patreon logo" />
                </a>
            </div>
            <div>
                <img src="images/tree.jpg" alt="Tree roots growing over water." />
            </div>
            <h2>
                <a href="https://www.patreon.com/">
                PATREON
                </a>
            </h2>
            <p>
                Get exclusive content.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ut exercitationem, ullam ad delectus quo blanditiis necessitatibus, dolorem placeat dicta nihil magni voluptate fugiat suscipit odio nisi explicabo nostrum recusandae.
            </p>
            </section>
            <section class="paypal support">
            <div>
                <a href="https://paypal.com">
                <img src="images/paypal4.png" alt="Paypal logo" />
                </a>
            </div>
            <div>
                <img src="images/boats.jpg" alt="Two bus boats on the beach" />
            </div>
            <h2>
                <a href="https://paypal.com">
                PAYPAL
                </a>
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus odio doloremque rerum harum. Unde sunt amet aliquid asperiores aspernatur facere rem, consequatur doloribus voluptatibus sapiente explicabo, animi eligendi, perferendis soluta.
            </p>
            </section>
        </main>
    )
  }