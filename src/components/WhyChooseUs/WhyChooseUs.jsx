import React from "react";
import { FaRegLightbulb, FaRegClock, FaRegHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./WhyChooseUs.module.css";

const items = [
  { id: 1, img: "/Picture/building (5).jpg" },
  {
    id: 2,
    icon: <FaRegLightbulb />,
    title: "ایده‌های نو و خلاقانه",
    desc: "تیم ما با استفاده از خلاقیت و تجربه، ایده‌های نوآورانه و راهکارهای اختصاصی ارائه می‌دهد تا کسب‌وکار شما متفاوت و متمایز شود.",
  },
  { id: 3, img: "/Picture/building (4).jpg" },
  {
    id: 4,
    icon: <FaRegClock />,
    title: "تحویل به موقع",
    desc: "مدیریت دقیق پروژه و برنامه‌ریزی زمان‌بندی شده تضمین می‌کند که کارها با کیفیت بالا و در زمان مقرر به شما تحویل داده شوند.",
  },
  { id: 5, img: "/Picture/مهندس ناظر 3.jpg" },
  {
    id: 6,
    icon: <FaRegHandshake />,
    title: "رضایت مشتری",
    desc: "تمرکز ما بر کیفیت و توجه به جزئیات باعث جلب اعتماد و رضایت مشتری در هر مرحله از همکاری می‌شود.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className={styles.section} aria-labelledby="why-choose-us-title">
      <div className={styles.container}>
        <h2 id="why-choose-us-title" className={styles.heading}>
          چرا ما بهترین انتخاب شما هستیم
        </h2>

        <div className={styles.grid}>
          {items.map((it, index) => (
            <motion.article
              key={it.id}
              className={`${styles.card} ${
                it.img ? styles.imgCard : styles.textCard
              } ${!it.img && index % 2 === 1 ? styles.textCardRight : ""}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {it.img ? (
                <img src={it.img} alt="" className={styles.fullImg} />
              ) : (
                <>
                  <div className={styles.iconWrapper}>{it.icon}</div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{it.title}</h3>
                    <p className={styles.cardDesc}>{it.desc}</p>
                  </div>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
