import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductCreatePage from '../pages/ProductCreatePage';

import { Box } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import ProductIndex from '../pages/products/ProductoIndex';
import InicioIndex from '../pages/inicio/InicioIndex';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box component="main" sx={{ mt: 15, px: 2 }}>
        <Routes>
          <Route path="/" element={<InicioIndex />} />
          <Route path="/productos" element={<ProductIndex/>} />
          <Route path="/crear" element={<ProductCreatePage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default AppRouter;
