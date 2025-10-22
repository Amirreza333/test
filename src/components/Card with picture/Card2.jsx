import React from 'react';
import styles from './Card2.module.css';
import { FaSearch } from "react-icons/fa";

export default function ProjectCard({
  imageUrl = '../../../public/Picture/pointing 2.webp',
  title = ' کاوش طیف متنوعی از پروژه‌های ما ',
  description = 'ما با بهره‌گیری از تیمی متخصص و خلاق، پروژه‌هایی را طراحی و اجرا می‌کنیم که ترکیبی از نوآوری، عملکرد بالا و تجربه کاربری ممتاز هستند. هدف ما، خلق محصولاتی است که هم نیاز مشتری و هم استانداردهای جهانی را برآورده کنند.',
  buttonText = 'دریافت قیمت رایگان'
}) {
  return (
    <div dir="rtl" className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.textSection}>
          <h2 className={styles.title}> <FaSearch/>
 {title} </h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <button className={styles.button}>{buttonText}</button>
          </div>
        </div>

        <div className={styles.imageSection}>
          <img src={imageUrl} alt="عکس پروژه" className={styles.image} />
        </div>
      </div>
    </div>
  );
}