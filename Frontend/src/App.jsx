import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"


function App() {
  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <ProductForm/>
      <ProductList/>
    </div>
  )
}

export default App
