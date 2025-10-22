import React from "react";
import styles from "./comments.module.css";
import { FaRegComments } from "react-icons/fa";
import { style } from "framer-motion/client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "م. کریمی",
      role: "مدیر محصول",
      quote:
        "همکاری با این تیم تجربه‌ای حرفه‌ای و لذت‌بخش بود. کیفیت کار و پشتیبانی عالی داشتند.",
      avatar: "../../../public/Picture/face pic.jpg",
      rating: 5, 
    },
    {
      name: "س. نوری",
      role: "کارآفرین",
      quote:
        "نتیجه نهایی دقیقاً چیزی بود که انتظار داشتیم — زیبا، تمیز و با عملکرد بالا.",
      avatar: "../../../public/Picture/face pic 2.jpg",
      rating: 4,
    },
    {
      name: "ا. رضایی",
      role: "سردبیر",
      quote:
        "تجربه همکاری فوق‌العاده بود. تیم بسیار حرفه‌ای و متعهدی هستند که نیازها را به‌خوبی درک می‌کنند.",
      avatar: "../../../public/Picture/face pic 3.jpg",
      rating: 5,
    },
  ];

  return (
    <section dir="rtl" className={styles.wrapper}>
      <h3 className={styles.Hassan}><FaRegComments /> گواهینامه ها <FaRegComments /> </h3>
      <h2 className={styles.title}> 
   آنچه مردم در مورد ما می‌گویند  
  
</h2>

      <div className={styles.cards}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>
              {[...Array(t.rating)].map((_, index) => (
                <span key={index} className={styles.star}>★</span>
              ))}
            </div>
            <p className={styles.quote}>“{t.quote}”</p>
            <div className={styles.footer}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
              <div className={styles.person}>
                <h4 className={styles.name}>{t.name}</h4>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
