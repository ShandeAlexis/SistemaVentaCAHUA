import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import ProductCreatePage from '../pages/ProductCreatePage';
import ProductListPage from '../pages/ProductListPage';
import { Box } from '@mui/material';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Este Box empuja el contenido hacia abajo para que no quede debajo del AppBar */}
      <Box component="main" sx={{ mt: 15, px: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductListPage />} />
          <Route path="/crear" element={<ProductCreatePage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default AppRouter;
