import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static"  >
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/productos">
          Productos
        </Button>
        <Button color="inherit" component={Link} to="/crear">
          Crear Producto
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
