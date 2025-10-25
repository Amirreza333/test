import React from "react";
import styles from "../ContactSection/ContactSection";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا میتونی لاجیک ارسال فرم رو اضافه کنی
    alert("پیام ارسال شد!");
  };

  return (
    <div className={styles.eConInner}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.contactBox}>
          <div className={styles.icon}>
            {/* SVG تماس */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
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
            <h3>تماس با مرکز پشتیبانی</h3>
            <p>
              <a href="tel:+1 809 120 6705">۰۲۱-۸۸۸۸۸۸۸۸</a>
            </p>
          </div>
        </div>

        <div className={styles.contactBox}>
          <div className={styles.icon}>
            {/* SVG ایمیل */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
            >
              <path
                fill="#FFB703"
                d="M33.0304 0.224684C31.5221 0.548024 30.5569 1.07384 27.5532 3.20843C26.0006 4.31175 24.5101 5.36394 24.2409 5.5466L23.7516 5.87869L17.9942 5.88088C12.2749 5.8832 12.2334 5.88525 11.6928 6.19136C11.3878 6.36418 11.0135 6.73851 10.8407 7.04353C10.5413 7.57209 10.5324 7.69746 10.5302 11.4308L10.528 15.274L5.43522 18.8786C2.63413 20.861 0.267528 22.577 0.175926 22.6917C-0.0831556 23.016 -0.0614173 66.8527 0.198075 67.5801C0.505965 68.4431 1.06665 69.1205 1.81792 69.5369L2.52995 69.9314H35.0007H67.4714L68.1915 69.5325C68.9487 69.1129 69.6795 68.2029 69.8222 67.5018C69.8646 67.2934 69.9528 67.0899 70.0183 67.0494C70.0851 67.0081 70.1374 57.2555 70.1374 44.8274C70.1374 31.0635 70.0888 22.709 70.009 22.7583C69.9384 22.8019 69.8308 22.7561 69.7697 22.6564C69.7088 22.5569 67.3672 20.8531 64.5661 18.8704L59.4733 15.2654L59.4711 11.4266C59.4689 7.69773 59.46 7.57209 59.1606 7.04353C58.9878 6.73851 58.6135 6.36418 58.3085 6.19136C57.7679 5.88525 57.7266 5.8832 52.0029 5.88088L46.2414 5.87869L43.7314 4.10271C39.8144 1.33115 39.3074 1.0022 38.4602 0.683239C36.6343 -0.00390927 34.8139 -0.157718 33.0304 0.224684Z"
              />
            </svg>
          </div>
          <div className={styles.boxBody}>
            <h3>برای ما ایمیل بفرستید</h3>
            <p>
              <a href="mailto:info@domain.com">info@domain.com</a>
            </p>
          </div>
        </div>

        <div className={styles.imageBox}>
          <img
            src="https://rayatheme.ir/builtuptheme/wp-content/uploads/2024/06/contact-info-img.png"
            alt="Contact"
          />
        </div>
      </div>

      {/* Form */}
      <div className={styles.formSection}>
        <h3>با ما تماس بگیرید</h3>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input type="text" name="your-name" placeholder="نام شما" required />
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
