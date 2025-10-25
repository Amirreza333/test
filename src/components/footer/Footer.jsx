import React, { useState } from "react";
import Style from "./Footer.module.css"; // اینجا دقت کن 👈
import Imgo from "../../../public/Picture/FZPR3073.PNG";

export default function Footer() {

  return (
    <footer className={Style.footer} dir="rtl">
      <div className={Style.container}>
        {/* درباره سایت */}
        <div className={Style.col}>
          <h3 className={Style.logo}>
            {" "}
            <img src={Imgo} alt="logo" width={150} height={150} />
          </h3>
          <p className={Style.text}>
            توضیح کوتاه درباره سایت. این بخش برای معرفی برند شماست.
          </p>
          <div className={Style.socials}>
            <a href="#" aria-label="اینستاگرام">
              📷
            </a>
            <a href="#" aria-label="توییتر">
              🐦
            </a>
            <a href="#" aria-label="تلگرام">
              💬
            </a>
          </div>
        </div>

        {/* لینک‌ها */}
        <div className={Style.col}>
          <h4> شرکت</h4>
          <ul>
            <li>
              <a href="/about">درباره ما</a>
            </li>
            <li>
              <a href="/contact">تماس با ما</a>
            </li>
            <li>
              <a href="/privacy">حریم خصوصی</a>
            </li>
            <li>
              <a href="/terms">قوانین و مقررات</a>
            </li>
          </ul>
        </div>

        {/* خدمات */}
        <div className={Style.col}>
          <h4>خدمات ما</h4>
          <ul>
            <li>
              <a href="#">خدمت ۱</a>
            </li>
            <li>
              <a href="#">خدمت ۲</a>
            </li>
            <li>
              <a href="#">خدمت ۳</a>
            </li>
          </ul>
        </div>

        {/* خبرنامه */}
        <div className={Style.col}>
          <h4>عضویت در خبرنامه</h4>
          {/* <p>برای دریافت جدیدترین اخبار ایمیل خود را وارد کنید:</p>
          <form onSubmit={handleSubmit} className={Style.form}>
            <input
              type="email"
              placeholder="ایمیل شما"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">عضویت</button>
          </form>
          {message && <p className={Style.msg}>{message}</p>} */}
        </div>
      </div>

      <div className={Style.bottom}>
        <p>
          © {new Date().getFullYear()} تمامی حقوق برای{" "}
          <strong>نام سایت شما</strong> محفوظ است.
        </p>
        <div className={Style.links}>
          <a href="/sitemap">نقشه سایت</a>
          <a href="/support">پشتیبانی</a>
        </div>
      </div>
    </footer>
  );
}
