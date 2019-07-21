import React from 'react';
import './ProductLink.css';
import { tsConstructorType } from '@babel/types';

export default function ProductLink(props)   {
  
  const {name, image, description} = props.product;
    return (
        <section class="product">
        <div class="amazon">
          <img src="images/amazon.png" />
          <img src={`images/${image}`} />
        </div>
        <p class="name">
          {name}
        </p>
        <p class="description">
          {description}
        </p>
      </section>
    )
}


