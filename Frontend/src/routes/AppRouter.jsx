import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import ProductCreatePage from '../pages/ProductCreatePage';
import ProductListPage from '../pages/ProductListPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductListPage />} />
        <Route path="/crear" element={<ProductCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
