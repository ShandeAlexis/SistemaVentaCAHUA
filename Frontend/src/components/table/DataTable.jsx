import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { useState } from "react";

export default function DataTable({ rows, columns, loading = false, height = 400 }) {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });

  return (
    <Paper sx={{ height, width: "100%", mt: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.id}
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />
    </Paper>
  );
}
