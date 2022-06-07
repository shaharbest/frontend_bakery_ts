import React from "react";
import { Product } from "../types";

interface ProductSquareProps {
  product: Product;
}

export function ProductSquare({ product: {name, image, price} }: ProductSquareProps) {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <img style={{height: '200px'}} src={image} alt={name} />
      </div>
      <div>
          <span>price: </span>
          <span>{price}</span>
      </div>
    </div>
  );
}
