import React from 'react';
import './ProductLink.css';

export default function ProductLink(props)   {
  
  const {name, image, description} = props.product;
    return (
        <section className="product">
        <div className="amazon">
          <img src="images/amazon.png" alt="..." />
          <img src={`images/${image}` } alt="..." />
        </div>
        <p className="name">
          {name}
        </p>
        <p className="description">
          {description}
        </p>
      </section>
    )
}


