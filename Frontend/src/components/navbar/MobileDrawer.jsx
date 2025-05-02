import { Box, Typography } from "@mui/material";
import NavItems from "./NavItems";

function MobileDrawer({ handleClose }) {
  return (
    <Box onClick={handleClose} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MiApp
      </Typography>
      <NavItems isMobile={true} handleClose={handleClose} />
    </Box>
  );
}

export default MobileDrawer;
