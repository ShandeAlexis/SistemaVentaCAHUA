import { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
    categoryId: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/products', {
      ...form,
      price: parseInt(form.price),
      stock: parseInt(form.stock),
      categoryId: parseInt(form.categoryId)
    });
    setForm({ name: '', price: '', stock: '', categoryId: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Producto</h2>
      <input name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
      <input name="price" placeholder="Precio" type="number" onChange={handleChange} value={form.price} />
      <input name="stock" placeholder="Stock" type="number" onChange={handleChange} value={form.stock} />
      <input name="categoryId" placeholder="ID Categoría" type="number" onChange={handleChange} value={form.categoryId} />
      <button type="submit">Crear</button>
    </form>
  );
}

export default ProductForm;
