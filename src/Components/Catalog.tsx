import React from "react";
import { Product } from "../types";
import { ProductSquare } from "./ProductSquare";

interface CatalogProps {
  products: Product[];
  loading: boolean;
}

export function Catalog({ products, loading }: CatalogProps) {
  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="catalog">
      {products.map((p) => (
        <ProductSquare key={p.id} product={p} />
      ))}
    </div>
  );
}
