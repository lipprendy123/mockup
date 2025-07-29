import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailProduct = () => {
  const { id } = useParams();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProducts(res.data);
    };

    fetchData();
  }, [id]);

  if (!products) return <p>Produk tidak ditemukan.</p>;

  return (
    <div className="max-w-2xl mt-10 mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <img
        className="w-full h-64 object-contain mb-6"
        src={products.image}
        alt={products.title}
      />

      <h1 className="text-2xl font-bold mb-2">{products.title}</h1>
      <p className="text-gray-600 text-sm mb-1">{products.category}</p>
      <div className="text-xl font-bold text-green-600 mb-4">
        ${products.price}
      </div>

      <p className="text-gray-700 mb-4">{products.description}</p>

      <div className="flex items-center text-sm text-yellow-500">
        ⭐ {products.rating?.rate} ({products.rating?.count} reviews)
      </div>
    </div>
  );
};

export default DetailProduct;
