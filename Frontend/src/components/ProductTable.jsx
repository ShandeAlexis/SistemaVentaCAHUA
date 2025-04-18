import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import axios from 'axios';

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get('http://localhost:3000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 200 },
    { field: 'price', headerName: 'Precio', width: 120, type: 'number' },
    { field: 'stock', headerName: 'Stock', width: 120, type: 'number' },
    { field: 'categoryId', headerName: 'ID Categoría', width: 150, type: 'number' }
  ];

  return (
    <Paper sx={{ height: 400, width: '100%', mt: 2 }}>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.id}
        paginationModel={{ pageSize: 5, page: 0 }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </Paper>
  );
}
