// import Style from "./body.module.css";
import stlye from "../Body/body.module.css";
function Body() {
  return (
    <div className={stlye.container}>
    <div className={stlye.bodypicture}>
        <img className={stlye.image} src="/public/Picture/OIP.webp" alt="" />
        <div className={stlye.bodytext}>
          <h5 className="matn1">درباره ما</h5>
        </div>
        <h1 className="matn2">ساختن رویاها با دقت و کیفیت</h1>
        <div>
          <p className={stlye.description}></p>
          <h4 className="matn3">
            ساخت سازه‌هایی که مادام‌العمر دوام می‌آورند، نیازمند رویکردی کل‌نگر
            است که مواد پیشرفته، طراحی انعطاف‌پذیر، نگهداری منظم و شیوه‌های
            پایداری را ادغام می‌کند. با یادگیری از نمونه های تاریخی و بهره گیری
            از تکنولوژی مدرن
          </h4>
          <div className={stlye.box}>
            <li className="boxtext1">خدمات جامع</li>
            <li className="boxtext2">فن آوری پیشرفته</li>
            <li className="boxtext3">ارتباطات شفاف</li>
        </div>
      </div>
    </div>
          </div>
  );
}
export default Body;
