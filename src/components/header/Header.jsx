import React, { useState } from "react";
import Style from "../header/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={Style["bu-header"]} dir="rtl">
      {/* Top Bar */}
      <div className={Style["bu-topbar"]}>
        <div className={Style["container"]}>
          <div className={Style["topbar-inner"]}>
            <div className={Style["topbar-left"]}>
              <span>📞 ۰۲۱-۱۲۳۴۵۶۷</span>
              <span>✉️ info@example.com</span>
            </div>
            <div className={Style["topbar-right"]}>
              <a href="#">ورود</a>
              <a href="#" className={Style["btn-primary"]}>
                ثبت سفارش
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={Style["header-main"]}>
        <div className={Style["container"]}>
          <div className={Style["header-inner"]}>
            {/* Logo */}
            <div className={Style.logo}>
              <div className={Style.logo}>
                <div className={Style["logo-icon"]}>
                  <img src="/FZPR3073.PNG" alt="لوگو سایت" />
                </div>
                <div>
                  <h1>BuiltUp</h1>
                  <p>قالب شرکتی حرفه‌ای</p>
                </div>
              </div>

              <div>
                <h1>BuiltUp</h1>
                <p>قالب شرکتی حرفه‌ای</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className={`${Style.nav} ${menuOpen ? Style.open : ""}`}>
              <a href="#features">ویژگی‌ها</a>
              <a href="#pricing">قیمت</a>
              <a href="#portfolio">نمونه‌کارها</a>
              <a href="#about">درباره ما</a>
              <a href="#contact">تماس</a>
              <div className={Style["nav-buttons"]}>
                <a href="#" className={Style["btn-outline"]}>
                  دمو
                </a>
                <a href="#" className={Style["btn-primary"]}>
                  خرید
                </a>
              </div>
            </nav>

            {/* Mobile toggle */}
            <button
              className={Style["menu-toggle"]}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}