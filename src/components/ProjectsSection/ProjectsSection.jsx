import React from "react";
import { Link } from "react-router-dom"; // اضافه کردن Link
import styles from "./ProjectSection.module.css";
import { FaSearch } from "react-icons/fa";

const projects = [
  {
    id: 1,
    img: "/Picture/beatiful buildings (3).jpg",
    title: "پارک ویو پلازا",
    desc: "پروژه‌ای مدرن با طراحی شگفت‌انگیز و چشم‌انداز شهری بی‌نظیر.",
  
  },
  {
    id: 2,
    img: "/Picture/beatiful buildings (1).jpg",
    title: "اقامتگاه بایساید",
    desc: "اقامتگاهی لوکس در کنار ساحل با امکانات کامل.",
 
  },
  {
    id: 3,
    img: "/Picture/beatiful buildings (2).jpg",
    title: "برج های جنگلی تپه",
    desc: "برج‌هایی مدرن در دل طبیعت سبز و آرامش‌بخش.",

  },
  {
    id: 4,
    img: "/Picture/beatiful buildings (1).webp",
    title: "آسپن هایتس",
    desc: "پروژه‌ای منحصر به فرد با طراحی داخلی لوکس.",
    
  },
];

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h3 className={styles.Hassan}>پروژه‌های ما</h3>
        <h2 className={styles.heading}>
          طیف متنوعی از پروژه‌های ما را کاوش کنید
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.route}
              className={styles.card}
              style={{ textDecoration: "none" }}
            >
              <img src={project.img} alt={project.title} className={styles.cardImg} />
              <div className={styles.overlay}>
                <p className={styles.overlayDesc}>{project.desc}</p>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
            </Link>
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