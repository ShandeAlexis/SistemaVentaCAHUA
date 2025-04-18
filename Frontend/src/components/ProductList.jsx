import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get('http://localhost:3000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} (Stock: {p.stock})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
