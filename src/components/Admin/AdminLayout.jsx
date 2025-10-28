import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Box, IconButton, useMediaQuery, useTheme, Container } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const AdminLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", direction: "rtl", minHeight: "100vh" }}>
      
      {!isMobile && <Sidebar />}

      {isMobile && (
        <>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              position: "fixed",
              top: 16,
              left: 16,
              zIndex: 1300,
              bgcolor: "#fcb53b",
              color: "#fff",
              "&:hover": { bgcolor: "#e0a42f" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Sidebar mobileOpen={mobileOpen} onClose={handleDrawerToggle} />
        </>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
          width: { xs: "100%", md: "calc(100% - 280px)" },
          ml: { md: "280px" },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 3, sm: 4 }, // پدینگ عمودی
            px: { xs: 10, sm: 10 }, // پدینگ افقی
            mt: { xs: 7, md: 0 }, // فاصله از منوی موبایل
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLayout;