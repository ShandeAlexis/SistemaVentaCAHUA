import { useState } from 'react';
import axios from 'axios';
import {
  TextField, Button, Box, Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ProductForm() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
    categoryId: ''
  });

  const navigate = useNavigate();

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
    navigate("/productos")
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>Crear Producto</Typography>

      <TextField fullWidth margin="normal" label="Nombre" name="name" value={form.name} onChange={handleChange} />
      <TextField fullWidth margin="normal" label="Precio" name="price" type="number" value={form.price} onChange={handleChange} />
      <TextField fullWidth margin="normal" label="Stock" name="stock" type="number" value={form.stock} onChange={handleChange} />
      <TextField fullWidth margin="normal" label="ID Categoría" name="categoryId" type="number" value={form.categoryId} onChange={handleChange} />

      <Button type="submit" variant="contained" color="primary">Crear</Button>
    </Box>
  );
}

export default ProductForm;
