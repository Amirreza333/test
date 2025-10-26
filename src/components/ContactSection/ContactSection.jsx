import React from "react";
import styles from "./ContactSection.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پیام ارسال شد!");
  };

  return (
    <div className={styles.contactContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.contactBox}>
          <div className={styles.iconBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 70 70"
            >
              <image
                width="70"
                height="70"
                href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAANlBMVEUAAAD/twP/twP/twP/twP/twP/twP/twP/twP/twP/twP/twP/twP/twP/twP/twP/twMAAAAzCcAzAAAAEHRSTlMAEFCAv9/PQK9gIHAwn++PtPHoHwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfoCBEOFRjAURs8AAADMElEQVRYw51Y2baDIAyUXWWR///aK0HaAAHszUtPFSfbZNFtI4VxIVW8RTPirtnh1rFN5bQ6fsT0KvZyT7sxiPERie4PIB1hhOPkc0KKw5zUieu+qY6TcThJOsaurMTzobHHN2A2nbWEPyGCKjYE2dx9JDAEGX17RIAldpsI01XUQW/jF4R2ZzMUOIP1JOOia/UEPgUBL/bayZQN9F8veFCeUY25Kc5f5X7EWGxwoJiikDmCQjFcCExiT/IkOfoQzHQon4L4UpDd/y7CSFWi3lnrPmWD0mAq0MrI7NVVhalw+Q6nlOJ7WZAVBl6FkgCURqfoghB1aisr069E/L7BE6OC6LPGH62dZBhTMfMYcvmkC7HA3CFSX4/CqPqz1W4Ec+LnmBqjQAwJHAcwFkfmmqBkh3ucHGKNWobrSu8Fjk1EYJgze5WzlzhXUs2frJdciG0qosfR6SFMKrsyZsv1WVUWg34okQGa6KytsJY9B7ijUGrq0hpHpypQD1lBLdqgMA1FNblM3cECTAHnmM4TY0x74SwFUbIgFyhMtWdktu43GNEaYx7a628vMkvWnKFlealrhsDPxYCBGq/S9IKwvdjuIf+CsK24bt8x/zAGelHttvyHMbJroseorU7Ed7tMIvCSrwRKM553csNcojTLBF+0ygFK061Y+Dm+BApEnG4rzAjB+2mfF7EGRcRBjzufvVo2D8Ce2C5ihli8QGBeZqkmlaBeHbrVsYjNlshQ4zhN7b7gJjEWGTh0JZ0WTfG86YTuAU0HBnSW02BwmiFMgGmyC7qPZIODlUZ9XAUc/4AQW/tga73alQZF2zMSpecdhKsp1IKzEysjRcUtF1hoKyz7Ndg7KZTEI9lb7i5LvpQNUNJ1ck0lhSwLEPVibn9MHKKkcfe22nNx0affjP8sUFxyoDO8dIrJGCfrz74e3El4iHG1pC4nVv4QoGazWU+1ZFVhUBdIgLCzOWEgKqu32dEO/8jTWvc1K44xjssg6tVUs3RfYUf+7hHezmnff9Zh3OduQb2hzfy6bb94st4Ze5WPNOoHkA19t6lkP37ByAa1QDvdcZZyWvk0T72L3zaOP+QTPY9R8iHkAAAAAElFTkSuQmCC"
              />
            </svg>
          </div>
          <div className={styles.boxBody}>
            <h3>تماس با پشتیبانی</h3>
            <p>
              <a href="tel:+982188888888">۰۲۱-۸۸۸۸۸۸۸۸</a>
            </p>
          </div>
        </div>

        <div className={styles.contactBox}>
          <div className={styles.iconBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 70 70"
            >
              <path
                fill="#FFB703"
                d="M33.0304 0.224684C31.5221 0.548024 30.5569 1.07384 27.5532 3.20843..."
              />
            </svg>
          </div>
          <div className={styles.boxBody}>
            <h3>ارسال ایمیل</h3>
            <p>
              <a href="mailto:info@domain.com">info@domain.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className={styles.formSection}>
        <h3>با ما تماس بگیرید</h3>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input type="text" name="name" placeholder="نام شما" required />
          <input type="email" name="email" placeholder="ایمیل شما" required />
          <input type="text" name="phone" placeholder="شماره تماس" required />
          <input type="text" name="subject" placeholder="موضوع" required />
          <textarea name="message" placeholder="پیام شما" required></textarea>
          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
