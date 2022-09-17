import React from "react";
import logo from "../img/logotype.svg";
import classes from "./Heading.module.css";
function Heading() {
  return (
    <div className={classes.heading}>
      <img src={logo} alt="logo" />
      <h1 className={classes.h1}>Образовательная онлайн-платформа</h1>
      <p className={classes.p}>
        Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и многим
        другим направлениям
      </p>
      <button className={classes.button}>Все направления</button>
    </div>
  );
}
export default Heading;
