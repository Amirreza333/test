import React, { useState, useEffect } from "react";
import styles from "./serviceconstruction.module.css";

const Construction = () => {
  const [hovered, setHovered] = useState(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isLoaded, setIsLoaded] = useState(false);

  const projectsData = [
    {
      id: 1,
      title: "پروژه برج مسکونی آفتاب",
      description:
        "اجرای کامل سازه بتنی، فونداسیون و اسکلت فلزی با رعایت استانداردهای ملی ساخت‌وساز.",
      image: "/Picture/برج مسکونی.jpg",
    },
    {
      id: 2,
      title: "پروژه ویلای مدرن شمال",
      description:
        "طراحی و ساخت ویلای دوبلکس با متریال ضد‌رطوبت و سیستم تهویه هوشمند.",
      image: "/Picture/ویلای مدرن شمال.jpg",
    },
    {
      id: 3,
      title: "پروژه مجتمع تجاری البرز",
      description:
        "ساخت مجتمع تجاری چند‌منظوره با مدیریت دقیق زمان‌بندی و کنترل کیفیت مستمر.",
      image: "/Picture/مجتمع تجاری.jpg",
    },
  ];

  const tableData = [
    { feature: "تعداد پروژه‌ها", value: 352 },
    { feature: "مهندسان حرفه‌ای", value: 74 },
    { feature: "مدت زمان اجرا (ماه)", value: 12 },
    { feature: "گارانتی خدمات (سال)", value: 5 },
  ];

  useEffect(() => {
 
    window.scrollTo({ top: 0, behavior: "instant" });


    setIsLoaded(true);

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, idx) => {
          const target = tableData[idx].value;
          if (val < target) {
            const increment = Math.ceil(target / 100);
            return val + increment > target ? target : val + increment;
          }
          return val;
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []); 

  return (
    <section className={`${styles.section} ${isLoaded ? styles.active : ""}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="/Picture/بنر صفحه.png"
            alt="ساخت و ساز"
            className={styles.bannerImage}
          />
          <h1 className={styles.title}>پروژه‌های ساخت و ساز</h1>
          <p className={styles.desc}>
            تیم ما با بهره‌گیری از مهندسان مجرب و تجهیزات مدرن، پروژه‌های ساختمانی
            را از مرحله طراحی تا اجرا با بالاترین کیفیت انجام می‌دهد.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.featureTable}>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableFeature}>{item.feature}</td>
                  <td className={styles.tableValue}>+{counts[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.cards}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`${styles.card} ${
                hovered === project.id ? styles.hovered : ""
              }`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <p>برای دریافت مشاوره یا شروع پروژه جدید با ما در تماس باشید.</p>
          <button
            className={styles.contactBtn}
            onClick={() => (window.location.href = "tel:+98221125")}
          >
            تماس با ما
          </button>
        </div>
      </div>
    </section>
  );
};

export default Construction;