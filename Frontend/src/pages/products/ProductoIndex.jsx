import { useProducts } from "../../hooks/useProducts";
import { productColumns } from "../../constants/productColumns";
import DataTable from "../../components/table/DataTable";

export default function ProductoIndex() {
  const { products, loading } = useProducts();

  return (
    <>
      <h1>Hola mundo</h1>
 

      <DataTable
      rows={products}
      columns={productColumns}
      loading={loading}
      />

    </>
  );
}
