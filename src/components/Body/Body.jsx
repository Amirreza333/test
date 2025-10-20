import style from "../Body/body.module.css";
import { PiCheckCircleFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";

function Body() {
  const items = [
    "خدمات جامع",
    "فناوری پیشرفته",
    "ارتباطات شفاف",
  ];

  return (
    <div className={style.container}>
      <div className={style.content}>
        
        <div className={style.textSection}>
          <h5 className={style.subtitle}>درباره ما</h5>
          <h1 className={style.title}>ساختن رویاها با دقت و کیفیت</h1>

          <p className={style.description}>
            ساخت سازه‌هایی که مادام‌العمر دوام می‌آورند، نیازمند رویکردی کل‌نگر است که
            مواد پیشرفته، طراحی انعطاف‌پذیر، نگهداری منظم و شیوه‌های پایداری را ادغام می‌کند.
            با یادگیری از نمونه‌های تاریخی و بهره‌گیری از تکنولوژی مدرن.
          </p>

          <ul className={style.checklist}>
     

            {items.map((item, index) => (
              <li key={index} className={style.checkItem}>
                <PiCheckCircleFill className={style.checkIcon} />
                <span>{item}</span>
              </li>
            ))}
                   <div className={style.cta}>
  <button className={style.btn}>مشاهده بیشتر</button>
  <div className={style.phoneBox}>
    <span className={style.phoneNumber}> <BiSolidPhoneCall /> 
 021-3333333</span>
  </div>
</div>
          </ul>
        </div>

        
        <div className={style.imageSection}>
          <img
            className={style.image}
            src="/Picture/OIP.webp"
            alt="تصویر ساختمان"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
