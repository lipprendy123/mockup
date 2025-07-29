import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Products = () => {
  //   const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const res = await axios.get('https://fakestoreapi.com/products');

  //         setProducts(res.data);
  //       } catch (error) {
  //         setError('Gagal mengambil data product');
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">List Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Products;
