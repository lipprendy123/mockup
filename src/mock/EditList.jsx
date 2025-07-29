import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://688810cdadf0e59551b8e8e3.mockapi.io/api/mock/products/${id}`
      );
      setForm(res.data);
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://688810cdadf0e59551b8e8e3.mockapi.io/api/mock/products/${id}`,
        form
      );

      alert('Produk berhasil diperbarui');
      navigate('/mock/list');
    } catch (error) {
      alert('Gagal memperbarui produk');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-xl font-bold text-center mb-4">Edit Produk</h1>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Simpan Perubahan
      </button>
    </form>
  );
};

export default EditList;
