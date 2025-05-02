import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { navbarItems } from "../../constants/navbarItems";

function NavItems({ isMobile, handleClose }) {
  return isMobile ? (
    <List>
      {navbarItems.map((item) => (
        <ListItem
          button
          key={item.path}
          component={Link}
          to={item.path}
          onClick={handleClose}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  ) : (
    <>
      {navbarItems.map((item) => (
        <Button
          key={item.path}
          color="inherit"
          component={Link}
          to={item.path}
        >
          {item.label}
        </Button>
      ))}
    </>
  );
}

export default NavItems;
