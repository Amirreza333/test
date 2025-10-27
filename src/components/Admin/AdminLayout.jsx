import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", direction: "rtl" }}>
      <Sidebar />
      <div
        style={{
          marginRight: "280px",
          padding: "2rem",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          fontFamily: "yekan, sans-serif",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;