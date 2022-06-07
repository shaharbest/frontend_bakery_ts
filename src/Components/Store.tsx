import React from "react";
import { Product } from "../types";
import { getRandomProducts } from "../utils";
import { ProductSquare } from "./ProductSquare";

export function Store() {
  const products: Product[] = getRandomProducts(6);

  return (
    <div>
      <h1>store</h1>
      <div>
        <div className="catalog">
          {!products
            ? "loading..."
            : products.map((p) => <ProductSquare key={p.id} product={p} />)}
        </div>
        <Pages />
      </div>
    </div>
  );
}

function Pages() {
  return (
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
    </div>
  );
}
