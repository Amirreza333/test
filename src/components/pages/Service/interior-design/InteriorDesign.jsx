import React, { useState, useEffect } from "react"; // Added useEffect
import { FaArrowCircleLeft, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./interiorDesign.module.css";

const InteriorDesign = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const subServices = [
    {
      id: 1,
      title: "طراحی مسکونی",
      description: "ایجاد فضاهای زیبا و کاربردی برای خانه‌های مدرن.",
      icon: "🏠",
    },
    {
      id: 2,
      title: "طراحی تجاری",
      description: "طراحی محیط‌های کاری حرفه‌ای برای کسب‌وکارها.",
      icon: "🏢",
    },
    {
      id: 3,
      title: "بازسازی داخلی",
      description: "نوسازی و بهبود فضاهای قدیمی با طراحی‌های خلاقانه.",
      icon: "🛠️",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "طراحی آپارتمان لوکس",
      description: "طراحی داخلی یک واحد مسکونی با تمرکز بر مینیمالیسم.",
      image: "/public/Picture/اپارتمان لوکس.webp",
      highlight: "سبک مینیمال با رنگ‌های خنثی",
    },
    {
      id: 2,
      title: "دفتر کار مدرن",
      description: "طراحی فضای کاری برای افزایش بهره‌وری.",
      image: "/public/Picture/دفتر کار مدرن.jpg",
      highlight: "افزایش ۲۰% بهره‌وری کارکنان",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "علی محمدی",
      text: "طراحی خانه‌ام فوق‌العاده شد! تیم بسیار حرفه‌ای بود.",
      rating: 5,
    },
    {
      id: 2,
      name: "زهرا حسینی",
      text: "فضای دفتر کارم حالا بسیار جذاب و کاربردی است.",
      rating: 4.5,
    },
  ];

  // Add useEffect to scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className={styles.section}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>خدمات طراحی داخلی</h1>
        <p className={styles.heroDesc}>
          تیم حرفه‌ای ما با طراحی‌های خلاقانه و مدرن، فضاهای شما را به محیط‌هایی زیبا و کاربردی تبدیل می‌کند. از خانه‌های مسکونی تا دفاتر تجاری، ما در کنار شما هستیم.
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
            <FaStar style={{ fontSize: "32px", color: "#fcb53b", marginBottom: "8px" }} />
            <h4 className={styles.benefitTitle}>طراحی خلاقانه</h4>
            <p>طرح‌های منحصربه‌فرد متناسب با سلیقه شما.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaStar style={{ fontSize: "32px", color: "#fcb53b", marginBottom: "8px" }} />
            <h4 className={styles.benefitTitle}>کیفیت بالا</h4>
            <p>استفاده از بهترین مواد و متریال در طراحی.</p>
          </div>
          <div className={styles.benefitItem}>
            <FaStar style={{ fontSize: "32px", color: "#fcb53b", marginBottom: "8px" }} />
            <h4 className={styles.benefitTitle}>پشتیبانی کامل</h4>
            <p>مشاوره و پشتیبانی در تمام مراحل پروژه.</p>
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
                  <FaStar key={i} style={{ color: "#fcb53b" }} />
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

export default InteriorDesign;