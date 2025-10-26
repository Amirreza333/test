import React, { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  const [hovered, setHovered] = useState(null);

  const yekanFont = {
    fontFamily: "yekan, sans-serif",
  };

  const servicesData = [
    {
      id: 1,
      title: "طراحی داخلی",
      description:
        "طراحی مدرن و کاربردی فضاهای داخلی با رعایت اصول ارگونومی و زیبایی‌شناسی.",
      image: "/Picture/طراحی داخل ساختمان.jpg",
      link: "InteriorDesign", 
    },
    {
      id: 2,
      title: "ساخت و ساز",
      description:
        "اجرای پروژه‌های ساختمانی با استفاده از مصالح باکیفیت و تیم متخصص.",
      image: "/Picture/ساخت و ساز 2.jpeg",
      link: "/ServiceConstruction", 
    },
    {
      id: 3,
      title: "مشاوره و نظارت",
      description: "ارائه مشاوره تخصصی و نظارت بر اجرای پروژه‌های ساختمانی.",
      image: "/Picture/مشاور ساختمان 1.jpg",
      link: "/consulting", 
    },
  ];

  const sectionStyle = {
    backgroundColor: "#f9f9f9",
    padding: "40px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "yekan, sans-serif",
  };

  const containerStyle = {
    maxWidth: 1140,
    width: "100%",
    backgroundColor: "rgba(233, 247, 254)",
    borderRadius: 12,
    padding: "20px 10px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 20,
  };

  const listStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  };

  const cardBase = {
    backgroundColor: "#fff",
    borderRadius: 12,
    textAlign: "center",
    padding: 0,
    minWidth: 220,
    maxWidth: 360,
    flex: "0 1 30%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.25s ease, boxShadow 0.25s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  };

  const imageWrapper = {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentWrapper = {
    padding: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleCardStyle = {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 6,
    textAlign: "center",
  };

  const descStyle = {
    fontSize: 13,
    color: "#555",
    lineHeight: 1.4,
    textAlign: "center",
  };

  const buttonWrapper = {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  };

  const buttonStyle = {
    height: "40px",
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 600,
    color: "#fff",
    backgroundColor: "#fcb53b",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease",
  };

  return (
    <section style={{ ...sectionStyle, ...yekanFont }}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>خدمات ساختمانی ما</h1>
        <div style={listStyle}>
          {servicesData.map((service) => {
            const isHovered = hovered === service.id;
            const cardStyle = {
              ...cardBase,
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              boxShadow: isHovered
                ? "0 12px 28px rgba(0,0,0,0.18)"
                : cardBase.boxShadow,
            };

            return (
              <Link
                key={service.id}
                to={service.link} 
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={cardStyle}>
                  <div style={imageWrapper}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={imgStyle}
                    />
                  </div>
                  <div style={contentWrapper}>
                    <h3 style={titleCardStyle}>{service.title}</h3>
                    <p dir="rtl" style={descStyle}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={buttonWrapper}>
          <Link
            to="/ServiceConstruction"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#12295c")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#fcb53b")}
          >
            <FaArrowCircleLeft style={{ marginRight: "6px" }} />
            مشاهده خدمات بیشتر
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
