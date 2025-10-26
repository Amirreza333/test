import React, { useState } from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // اینجا می‌تونی API call برای خبرنامه اضافه کنی
      alert(`اشتراک با موفقیت ثبت شد! ایمیل: ${email}`);
      setEmail('');
    } else {
      alert('لطفاً ایمیل معتبر وارد کنید.');
    }
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      {/* بخش اصلی فوتر */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* ستون درباره ما */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5>درباره Builtup</h5>
                <p>
                  شرکت Builtup ارائه‌دهنده خدمات طراحی و توسعه وب‌سایت‌های شرکتی است. ما با تمرکز بر کیفیت و نوآوری، پروژه‌های شما را به بهترین شکل اجرا می‌کنیم.
                </p>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* ستون لینک‌های مفید */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5>لینک‌های مفید</h5>
                <ul>
                  <li>
                    <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
                      خانه
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>
                      درباره ما
                    </a>
                  </li>
                  <li>
                    <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>
                      خدمات
                    </a>
                  </li>
                  <li>
                    <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>
                      پروژه‌ها
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                      تماس با ما
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ستون خدمات */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5>خدمات ما</h5>
                <ul>
                  <li>
                    <a href="#web-design" onClick={(e) => handleSmoothScroll(e, '#web-design')}>
                      طراحی وب
                    </a>
                  </li>
                  <li>
                    <a href="#app-dev" onClick={(e) => handleSmoothScroll(e, '#app-dev')}>
                      توسعه اپ
                    </a>
                  </li>
                  <li>
                    <a href="#marketing" onClick={(e) => handleSmoothScroll(e, '#marketing')}>
                      بازاریابی دیجیتال
                    </a>
                  </li>
                  <li>
                    <a href="#it-consulting" onClick={(e) => handleSmoothScroll(e, '#it-consulting')}>
                      مشاوره IT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* ستون خبرنامه */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5>خبرنامه</h5>
                <p>برای دریافت آخرین اخبار و تخفیف‌ها، ایمیل خود را وارد کنید.</p>
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="ایمیل شما"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">اشتراک</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بخش کپی‌رایت */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                &copy; ۱۴۰۴ Builtup. تمامی حقوق محفوظ است. | طراحی شده توسط{' '}
                <a href="https://rtl-theme.com" target="_blank" rel="noopener noreferrer">
                  RTL Theme
                </a>
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="footer-bottom-links">
                <li>
                  <a href="#privacy" onClick={(e) => handleSmoothScroll(e, '#privacy')}>
                    حریم خصوصی
                  </a>
                </li>
                <li>
                  <a href="#terms" onClick={(e) => handleSmoothScroll(e, '#terms')}>
                    شرایط استفاده
                  </a>
                </li>
                <li>
                  <a href="#sitemap" onClick={(e) => handleSmoothScroll(e, '#sitemap')}>
                    نقشه سایت
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;