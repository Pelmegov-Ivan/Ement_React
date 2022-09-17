import classes from "./Footer2.module.css";
function Footer2() {
  return (
    <div className={classes.footer2}>
      <span className={classes.rights}>E-Mentor © 2021 Все права защищены</span>
      <span className={classes.politics}>
        Политика обработки персональных данных
      </span>
      <span className={classes.offer}>Публичная оферта</span>
    </div>
  );
}
export default Footer2;
