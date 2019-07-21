import React from 'react';
import ImageScroll from './ImageScroll';
import ProductLink from './ProductLink';
import './Gear.css';

export default function Gear() {
    const products = [
        {
          name: `Canon PowerShot G7`,
          image: `powershot.jpg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi tempore ratione libero alias aspernatur blanditiis voluptatibus minus iure consequuntur provident temporibus expedita ipsam, exercitationem distinctio corporis quod eaque, dolorum accusantium!`
        },
        {
          name: `GoPro HERO4 Black`,
          image: `hero4.jpg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate veniam repellendus quisquam ullam illum tempora delectus rerum, omnis fugit reiciendis qui dolorem ipsam adipisci, sit! Voluptates amet quis commodi obcaecati!`
        },
        {
          name: `GoPro HERO4 Silver`,
          image: `hero4s.jpg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni natus in et similique asperiores quaerat dolores necessitatibus eaque modi, sit minima architecto corrupti a tenetur, ullam qui, unde iusto vero.`
        },
        {
          name: `GoPro HERO5 Black`,
          image: `hero5.jpg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae inventore beatae voluptas, corrupti voluptatum illum qui, veritatis dolor. Accusamus, eos, molestias explicabo perspiciatis reiciendis consequuntur ea alias nostrum repellendus ab?`
        },
        {
          name: `GoPro HERO Session`,
          image: `heros.jpg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, doloremque, voluptatibus. Error ducimus officia expedita sed voluptas voluptatibus, accusantium, deleniti, eius obcaecati quidem possimus incidunt labore fugit optio nulla at!`
        },
        {
          name: `Cyberlink PowerDirector`,
          image: `power.jpg`,
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quod numquam, odio fuga vitae omnis laudantium accusantium iure. Iure ducimus, perspiciatis eos! Maiores explicabo ipsa non quia veniam fuga ducimus.`
        }
      ]

    return(
        <div>
        <ImageScroll />
        <article class="gear">
            <h1>
                What I use
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatum, magnam. Inventore, dolores, culpa. Soluta eos quae adipisci illum maiores? Totam inventore quos commodi nobis soluta, accusamus incidunt iste ipsum!
            </p>
            <div className="flex-container">
                {products.map((product) => ( 
                    <ProductLink product={product} key={product.name}/>
                ))}
            </div>
        </article>
        </div>
    ) 
}
