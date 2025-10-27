import React from "react";
import styles from "./ContactSection.module.css";
import TextType from "../../Animation/click/texttype/TextType";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پیام شما ارسال شد!");
  };

  return (
    <div className={styles.contactContainer}>
  

      {/* 📨 فرم تماس */}
      <div className={styles.formSection}>
        <TextType 
          className={styles.subHeader}
  text={["با ما ارتباط بگیرید", "با ما در ارتباط باشید", ]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
        <h2 ></h2>

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
