import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');

        setProducts(res.data);
      } catch (error) {
        setError('Gagal mengambil data product');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded-2xl shadow-md overflow-hidden border border-gray-200 p-4 bg-white"
        >
          <img
            className="w-full h-48 object-contain mb-4"
            src={product.image}
            alt={product.title}
          />
          <div className="text-lg font-semibold mb-1">{product.title}</div>
          <div className="text-sm text-gray-500 mb-2">{product.category}</div>
          {/* <p className="text-sm text-gray-700 mb-2">{product.description}</p> */}
          <div className="text-xl font-bold mb-2">${product.price}</div>
          {/* <div className="flex items-center text-sm text-yellow-500">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </div> */}
          <Link to={`/products/${product.id}`}>Lihat Detail</Link>
        </div>
      ))}
    </>
  );
};

export default ProductList;
