import React, { useState } from "react";
import { FaArrowCircleLeft, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./consulting.module.css";

const Consulting = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const subServices = [
    {
      id: 1,
      title: "مشاوره فنی",
      description: "ارائه راهکارهای مهندسی برای بهینه‌سازی پروژه‌های ساختمانی.",
      icon: "📋",
    },
    {
      id: 2,
      title: "نظارت بر اجرا",
      description: "کنترل کیفیت و پیشرفت پروژه با استانداردهای بین‌المللی.",
      icon: "🔍",
    },
    {
      id: 3,
      title: "مدیریت پروژه",
      description: "برنامه‌ریزی و مدیریت زمان و هزینه پروژه‌ها.",
      icon: "📅",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "نظارت بر مجتمع تجاری",
      description: "نظارت کامل بر ساخت یک مرکز تجاری ۵ طبقه.",
      image: "/public/Picture/نظارت مجتمع تجاری.png",
      highlight: "کاهش ۱۵% هزینه‌های اجرایی",
    },
    {
      id: 2,
      title: "مشاوره پروژه مسکونی",
      description: "ارائه مشاوره برای بهینه‌سازی طراحی و اجرا.",
      image: "/public/Picture/مشاوره پروژه مسکونی.jpg",
      highlight: "افزایش ایمنی سازه",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "محمد حسینی",
      text: "مشاوره دقیق و نظارت حرفه‌ای، پروژه ما را نجات داد!",
      rating: 5,
    },
    {
      id: 2,
      name: "سارا کاظمی",
      text: "مدیریت پروژه عالی، همه چیز طبق برنامه پیش رفت.",
      rating: 4.5,
    },
  ];

  return (
    <div className={styles.section}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>خدمات مشاوره و نظارت</h1>
        <p className={styles.heroDesc}>
          با تکیه بر تجربه و دانش فنی، تیم ما خدمات مشاوره و نظارت حرفه‌ای ارائه می‌دهد تا پروژه‌های ساختمانی شما با بالاترین کیفیت و کمترین هزینه اجرا شوند.
        </p>
        <Link to="/contact" className={styles.ctaButton}>
          <FaStar style={{ marginLeft: "8px" }} />
          تماس بگیرید
        </Link>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>خدمات ما</h2>
        <div className={styles.servicesGrid}>
          {subServices.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>
                {service.icon}
              </span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefitsContainer}>
        <h2 className={styles.sectionTitle}>چرا ما را انتخاب کنید؟</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefitItem}>
            <FaStar style={{ fontSize: "32px", color: "#f5a623", marginBottom: "8px" }} />
            <h4 className={styles.benefitTitle}>تخصص حرفه‌ای</h4>
            <p>مهندسان با تجربه و دارای گواهینامه‌های معتبر.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaStar style={{ fontSize: "32px", color: "#f5a623", marginBottom: "8px" }} />
            <h4 className={styles.benefitTitle}>دقت در نظارت</h4>
            <p>کنترل کیفیت در هر مرحله از پروژه.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaStar style={{ fontSize: "32px", color: "#f5a623", marginBottom: "8px" }} />
            <h4 className={styles.benefitTitle}>مدیریت بهینه</h4>
            <p>کاهش هزینه‌ها و تسریع در اجرای پروژه.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>پروژه‌های نمونه</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <p className={styles.projectHighlight}>{project.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>نظرات مشتریان</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} style={{ color: "#f5a623" }} />
                ))}
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <h4 className={styles.testimonialName}>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.backButtonWrapper}>
        <Link to="/" className={styles.ctaButton}>
          <FaArrowCircleLeft style={{ marginLeft: "8px" }} />
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default Consulting;