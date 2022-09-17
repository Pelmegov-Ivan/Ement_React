import classes from "./Nav1.module.css";
import logo2 from "../img/logotype2.svg";
function Nav1() {
  return (
    <div className={classes.nav1}>
      <img src={logo2} className={classes.img} alt="" />
      <div className={classes.div}>
        <span>О нас</span>
        <span>Платформа</span>
        <span style={{ borderBottom: "2px dashed #FA9F42" }}>Курсы</span>
        <span>Лекции</span>
        <span>Тарифы</span>
        <span>Блог</span>
        <span>Контакты</span>
      </div>
    </div>
  );
}
export default Nav1;
