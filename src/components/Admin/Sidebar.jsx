// src/components/admin/Sidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Construction as ProjectsIcon,
  People as ClientsIcon,
  Comment as CommentsIcon,
  ContactMail as ContactIcon,
  BarChart as StatsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const menuItems = [
  { title: "داشبورد", icon: <DashboardIcon />, path: "/admin" },
  { title: "پروژه‌ها", icon: <ProjectsIcon />, path: "/admin/projects" },
  { title: "مشتریان", icon: <ClientsIcon />, path: "/admin/clients" },
  { title: "نظرات", icon: <CommentsIcon />, path: "/admin/comments" },
  { title: "تماس‌ها", icon: <ContactIcon />, path: "/admin/contacts" },
  { title: "آمار", icon: <StatsIcon />, path: "/admin/stats" },
  { title: "تنظیمات", icon: <SettingsIcon />, path: "/admin/settings" },
];

const Sidebar = ({ mobileOpen = false, onClose = () => {} }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        bgcolor: "#1e1e2e",
        color: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* هدر */}
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold" color="#fcb53b">
          پنل مدیریت
        </Typography>
        <Typography variant="caption" color="#aaa">
          نسخه 1.0
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#333" }} />

      {/* منو */}
      <List sx={{ flexGrow: 1, px: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            component={NavLink}
            to={item.path}
            onClick={onClose}
            sx={{
              mb: 1,
              borderRadius: 2,
              color: "#ccc",
              "&.active": {
                bgcolor: "rgba(252, 181, 59, 0.15)",
                color: "#fcb53b",
                border: "1px solid #fcb53b",
                "& .MuiListItemIcon-root": { color: "#fcb53b" },
              },
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.05)",
                color: "#fff",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>

      {/* خروج */}
      <Box sx={{ p: 2 }}>
        <ListItem
          onClick={handleLogout}
          sx={{
            bgcolor: "rgba(255,107,107,0.1)",
            color: "#ff6b6b",
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": { bgcolor: "rgba(255,107,107,0.2)", color: "#fff" },
          }}
        >
          <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="خروج" />
        </ListItem>
      </Box>

      <Box sx={{ p: 2, textAlign: "center", color: "#666", fontSize: "0.8rem" }}>
        © ۱۴۰۴ - شرکت ساختمانی شما
      </Box>
    </Box>
  );

  return (
    <>
      {/* دسکتاپ */}
      <Box sx={{ display: { xs: "none", md: "block" }, position: "fixed", top: 0, right: 0, height: "100%", zIndex: 1200 }}>
        {drawerContent}
      </Box>

      {/* موبایل */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 280 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={onClose} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;