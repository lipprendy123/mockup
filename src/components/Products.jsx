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
      <nav class="max-w-6xl container mx-auto flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div class="text-xl font-bold">EduSite</div>
        <ul class="hidden md:flex gap-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div class="hidden md:flex gap-2">
          <button class="text-blue-600">Login</button>
          <button class="bg-blue-600 text-white px-4 py-2 rounded">
            Signup
          </button>
        </div>
      </nav>

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
