import React from "react";

const projects = [
  { id: 1, title: "آسپن هایتس", status: "در حال ساخت", progress: 75 },
  { id: 2, title: "ویلای لوکس شمال", status: "تکمیل شده", progress: 100 },
];

const ProjectList = () => {
  return (
    <div>
      <h2>لیست پروژه‌ها</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ padding: "1rem", textAlign: "right" }}>شناسه</th>
            <th style={{ padding: "1rem", textAlign: "right" }}>عنوان</th>
            <th style={{ padding: "1rem", textAlign: "right" }}>وضعیت</th>
            <th style={{ padding: "1rem", textAlign: "right" }}>پیشرفت</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "1rem" }}>{p.id}</td>
              <td style={{ padding: "1rem" }}>{p.title}</td>
              <td style={{ padding: "1rem" }}>
                <span
                  style={{
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    backgroundColor: p.status === "تکمیل شده" ? "#d4edda" : "#fff3cd",
                    color: p.status === "تکمیل شده" ? "#155724" : "#856404",
                  }}
                >
                  {p.status}
                </span>
              </td>
              <td style={{ padding: "1rem" }}>{p.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;