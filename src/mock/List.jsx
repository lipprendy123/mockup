import axios from 'axios';
import React, { useEffect, useState } from 'react';

const List = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://688810cdadf0e59551b8e8e3.mockapi.io/api/mock/products'
      );
      setList(res.data);
    } catch (error) {
      setError('Gagal mengambil list data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Yakin ingin menghapus produk ini?');
    if (!confirm) return;

    try {
      await axios.delete(
        `https://688810cdadf0e59551b8e8e3.mockapi.io/api/mock/products/${id}`
      );
      // update list setelah delete
      setList((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      alert('Gagal menghapus produk');
      console.error(err);
    }
  };

  if (loading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-4">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {list.map((l) => (
        <div
          key={l.id}
          className="bg-white rounded-lg shadow-md overflow-hidden relative"
        >
          <img
            src={l.image}
            alt={l.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-1">{l.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{l.category}</p>
            <p className="text-sm text-gray-700 mb-2">{l.description}</p>
            <p className="text-blue-600 font-semibold">
              Rp{Number(l.price).toLocaleString()}
            </p>
            <button
              onClick={() => handleDelete(l.id)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
            >
              Hapus
            </button>
            <button
              onClick={() => (window.location.href = `/mock/list/edit/${l.id}`)}
              className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded text-sm ml-2"
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
