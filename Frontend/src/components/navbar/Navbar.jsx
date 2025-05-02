import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Drawer,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useState } from "react";
  import NavItems from "./NavItems";
  import MobileDrawer from "./MobileDrawer";
  
  function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    return (
      <>
        <AppBar position="fixed" sx={{ backgroundColor: "#1a237e" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              MiApp
            </Typography>
  
            {/* Mobile menu icon */}
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
            </Box>
  
            {/* Desktop nav items */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavItems isMobile={false} />
            </Box>
          </Toolbar>
        </AppBar>
  
        {/* Mobile Drawer */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          <MobileDrawer handleClose={handleDrawerToggle} />
        </Drawer>
      </>
    );
  }
  
export default Navbar;
  