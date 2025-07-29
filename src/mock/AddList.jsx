import axios from 'axios';
import React, { useState } from 'react';

const AddList = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://688810cdadf0e59551b8e8e3.mockapi.io/api/mock/products',
        form
      );

      alert('Product berhasil ditambahkan');
      setForm({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
      });
    } catch (error) {
      alert('Gagal menambahkan product');
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mt-10 mx-auto space-y-4"
      >
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

        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Tambah Produk
        </button>
      </form>
    </>
  );
};

export default AddList;
