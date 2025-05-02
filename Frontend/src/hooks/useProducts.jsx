import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_API_URL } from "../config/api";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const res = await axios.get(`${BACKEND_API_URL}/products`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error cargando productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading };
};
