import React from 'react';
import styles from './ContactSection.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.desc}>
            Feel free to reach out through any of the following ways. I’d love to connect and discuss projects, ideas, or collaborations.
          </p>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.label}>Address:</span> Los Angeles, CA
            </li>
            <li>
              <span className={styles.label}>Phone:</span> +1 234 567 890
            </li>
            <li>
              <span className={styles.label}>Email:</span> example@email.com
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" className={styles.input} required />
            <input type="email" placeholder="Your Email" className={styles.input} required />
            <textarea placeholder="Your Message" className={styles.textarea} required></textarea>
            <button type="submit" className={styles.btn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
