import classes from "./Footer.module.css";
import logo1 from "../img/logotype1.svg";
import icons from "../img/icons1.svg";
function footer1() {
  return (
    <div className={classes.footer1}>
      <div className={classes.div}>
        <div className={classes.logoSocial}>
          <img src={logo1} alt="" />
          <p className={classes.p}>
            Образовательная онлайн-платформа для развития и тренировки навыков в
            сфере информационных технологий
          </p>
          <img src={icons} alt="" />
        </div>
        <div className={classes.contacts}>
          <span className={classes.first}>Обучение</span>
          <span className={classes.span}>Курсы</span>
          <span className={classes.span}>Вебинары</span>
          <span className={classes.span}>Тренажеры</span>
          <span>Воркшопы</span>
        </div>
        <div className={classes.aboutUs}>
          <span className={classes.first}>О нас</span>
          <span className={classes.span}>О платформе</span>
          <span className={classes.span}>Преподаватели</span>
          <span className={classes.span}>Тарифы</span>
          <span>Отзывы</span>
        </div>
        <div className={classes.connection}>
          <span className={classes.first}>Контакты</span>
          <span className={classes.span}>Связаться с нами</span>
          <span className={classes.span}>Консультация</span>
          <span className={classes.span}>Реквизиты</span>
          <span>Поддержка</span>
        </div>
        <div className={classes.forQuestions}>
          <span className={classes.first}>Возникли вопросы?</span>
          <span>Напишите нам на почту education@ementor.info</span>
        </div>
      </div>
    </div>
  );
}
export default footer1;
