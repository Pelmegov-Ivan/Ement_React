import React from "react";
import classes from "./Nav.module.css";
function Nav() {
  return (
    <div className={classes.nav}>
      <span>О нас</span>
      <span style={{ borderBottom: "2px dashed #fa9f42" }}>Платформа</span>
      <span>Курсы</span>
      <span>Лекции</span>
      <span>Тарифы</span>
      <span>Блог</span>
      <span>Контакты</span>
    </div>
  );
}
export default Nav;
