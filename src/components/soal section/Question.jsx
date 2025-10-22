import React, { useState } from "react";
import styles from "./Question.module.css";
import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { LuMessageCircleQuestion } from "react-icons/lu";

export default function FAQ() {
  const faqs = [
    {
      question: "آیا پروژه‌هایتان گارانتی دارند؟",
      answer:
        "بله، تمامی پروژه‌های ما شامل پشتیبانی و گارانتی هستند تا اطمینان حاصل شود که بدون مشکل اجرا شوند.",
    },
    {
      question: "زمان تحویل پروژه چقدر است؟",
      answer:
        "بسته به نوع و حجم پروژه، معمولاً بین 2 تا 6 هفته طول می‌کشد. ما زمان دقیق را در قرارداد مشخص می‌کنیم.",
    },
    {
      question: "  آیا امکان تغییر در طراحی پس از شروع وجود دارد؟ ",
      answer:
        "بله، تغییرات جزئی در طول فرآیند توسعه امکان‌پذیر است و تیم ما شما را در اعمال آنها راهنمایی می‌کند.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section dir="rtl" className={styles.wrapper}>
      <h3 className={styles.smallTitle}>سوالات متداول</h3>
      <h2 className={styles.mainTitle}>سوالاتی دارید؟ ما پاسخ‌هایی داریم</h2>

      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <LuMessageCircleQuestion />
{faq.question}
              <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className={styles.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
