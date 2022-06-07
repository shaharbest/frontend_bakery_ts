import axios from "axios";
import React, { useState, useEffect } from "react";
import { Catalog } from "./Catalog";
import { Pagination } from "./Pagination.tsx";

const dbUrl = "http://localhost:3000/products";

export function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(dbUrl);
      setProducts(res.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>store</h1>
      <Catalog products={currentProducts} loading={loading} />
      <Pagination
        paginate={paginate}
        itemsPerPage={productsPerPage}
        totalItems={products.length}
      />
    </div>
  );
}