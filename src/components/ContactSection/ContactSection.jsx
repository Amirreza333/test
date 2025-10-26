import React from "react";
import styles from "./ContactSection.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پیام شما ارسال شد!");
  };

  return (
    <div className={styles.contactContainer}>
  

      {/* 📨 فرم تماس */}
      <div className={styles.formSection}>
        <h3>با ما تماس بگیرید</h3>
        <h2 className={styles.subHeader}>با ما در تماس باشید</h2>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.row}>
            <input type="text" placeholder="نام شما" required />
            <input type="email" placeholder="ایمیل شما" required />
          </div>

          <div className={styles.row}>
            <input type="text" placeholder="شماره تماس" required />
            <input type="text" placeholder="موضوع پیام" required />
          </div>

          <textarea placeholder="متن پیام شما..." required></textarea>
          <button type="submit">ارسال پیام</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
