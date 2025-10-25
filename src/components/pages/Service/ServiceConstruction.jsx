import React from 'react';
import { Home, Building, Factory } from 'lucide-react';
import './serviceconstruction.module.css';

const CategoriesSection = () => {
  const categories = [
    { id: 1, title: 'مسکونی', description: 'خانه، آپارتمان و ویلا', icon: <Home className="category-icon" /> },
    { id: 2, title: 'تجاری', description: 'مراکز خرید و اداری', icon: <Building className="category-icon" /> },
    { id: 3, title: 'صنعتی', description: 'کارخانه و انبار', icon: <Factory className="category-icon" /> },
  ];

  return (
    <section className="categories-section">
      <div className="section-header">
        <h2>دسته‌بندی پروژه‌ها</h2>
        <p>انواع پروژه‌ها بر اساس نوع کاربرد و نیاز شما</p>
      </div>

      {/* باکس اصلی */}
      <div className="categories-box">
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="icon-wrapper">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
