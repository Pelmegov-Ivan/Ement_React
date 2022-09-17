import classes from "./Number.module.css";
function Number() {
  return (
    <div className={classes.numbers}>
      <div className={classes.numtext}>
        <span className={classes.number}>100+</span>
        <span className={classes.text}>
          теоретических и практических курсов для разного уровня
        </span>
      </div>
      <div className={classes.numtext}>
        <span className={classes.number}>3000</span>
        <span className={classes.text}>
          часов видео-лекций и вебинаров от лучших преподавателей
        </span>
      </div>
      <div className={classes.numtext}>
        <span className={classes.number}>15</span>
        <span className={classes.text}>
          направлений обучения востребованным профессиям
        </span>
      </div>
      <div className={classes.numtext}>
        <span className={classes.number}>2000</span>
        <span className={classes.text}>
          учеников уже занимаются на нашей платформе
        </span>
      </div>
    </div>
  );
}
export default Number;
