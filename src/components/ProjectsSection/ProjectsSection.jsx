import React from "react";
import styles from "./ProjectSection.module.css";
import { FaSearch } from "react-icons/fa";

const projects = [
  { id: 1, img: "/Picture/beatiful buildings (3).jpg", title: "پارک ویو پلازا", desc: "پروژه‌ای مدرن با طراحی شگفت‌انگیز و چشم‌انداز شهری بی‌نظیر. هر جزئیات آن با دقت برنامه‌ریزی شده است." },
  { id: 2, img: "/Picture/beatiful buildings (1).jpg", title: "اقامتگاه بایساید", desc: "اقامتگاهی لوکس در کنار ساحل با امکانات کامل و چشم‌انداز آرامش‌بخش دریا. ایده‌آل برای زندگی مدرن و آرامش‌بخش." },
  { id: 3, img: "/Picture/beatiful buildings (2).jpg", title: "برج های جنگلی تپه", desc: "برج‌هایی مدرن در دل طبیعت سبز و آرامش‌بخش، ترکیبی از معماری مدرن و محیط طبیعی باورنکردنی." },
  { id: 4, img: "/Picture/beatiful buildings (1).webp", title: "آسپن هایتس", desc: "پروژه‌ای منحصر به فرد با طراحی داخلی لوکس، فضای سبز فراوان و چشم‌انداز عالی برای تجربه‌ای متفاوت از زندگی شهری." },
];

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h3 className={styles.Hassan}> پروژه های ما</h3>
        <h2 className={styles.heading}>
          طیف متنوعی از پروژه‌های ما را کاوش کنید
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <img src={project.img} alt={project.title} className={styles.cardImg} />
              <div className={styles.overlay}>
                <p className={styles.overlayDesc}>{project.desc}</p>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
            </div>
          ))}
        </div>

        
        <div className={styles.buttonWrapper}>
          <button className={styles.viewMoreBtn}>مشاهده همه پروژه‌ها</button>
        </div>
      </div>
    </section>
  );
};


export default ProjectsSection;
