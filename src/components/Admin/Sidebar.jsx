import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  Construction as ProjectsIcon,
  People as ClientsIcon,
  Comment as CommentsIcon,
  ContactMail as ContactIcon,
  BarChart as StatsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
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

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  };

  return (
    <div
      style={{
        width: "280px",
        height: "100vh",
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "#1e1e2e",
        color: "#fff",
        padding: "2rem 1.5rem",
        fontFamily: "yekan, sans-serif",
        boxShadow: "-8px 0 25px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        overflowY: "auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ color: "#fcb53b", fontSize: "1.8rem", fontWeight: "bold" }}>
          پنل مدیریت
        </h2>
        <p style={{ color: "#aaa", fontSize: "0.9rem" }}>نسخه 1.0</p>
      </div>

      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.9rem 1.2rem",
              marginBottom: "0.5rem",
              borderRadius: "12px",
              color: isActive ? "#fcb53b" : "#ccc",
              backgroundColor: isActive ? "rgba(252, 181, 59, 0.15)" : "transparent",
              textDecoration: "none",
              fontSize: "1.05rem",
              fontWeight: 500,
              transition: "all 0.3s ease",
              border: isActive ? "1px solid #fcb53b" : "1px solid transparent",
            })}
            onMouseEnter={(e) => {
              if (!e.currentTarget.classList.contains("active")) {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={(e) => {
              if (!e.currentTarget.classList.contains("active")) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#ccc";
              }
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}

        <div
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.9rem 1.2rem",
            marginTop: "1rem",
            borderRadius: "12px",
            color: "#ff6b6b",
            backgroundColor: "rgba(255,107,107,0.1)",
            cursor: "pointer",
            fontSize: "1.05rem",
            fontWeight: 500,
            transition: "all 0.3s ease",
            border: "1px solid rgba(255,107,107,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,107,107,0.2)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,107,107,0.1)";
            e.currentTarget.style.color = "#ff6b6b";
          }}
        >
          <span style={{ fontSize: "1.4rem" }}>
            <LogoutIcon />
          </span>
          <span>خروج</span>
        </div>
      </nav>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "1.5rem",
          right: "1.5rem",
          textAlign: "center",
          color: "#666",
          fontSize: "0.85rem",
        }}
      >
        <p>© ۱۴۰۴ - شرکت ساختمانی شما</p>
      </div>
    </div>
  );
};

export default Sidebar;