import photo from "../img/photo.png";
import dash from "../img/dashline.png";
import classes from "./TrainingFormats.module.css";
function TrainingFormats() {
  return (
    <div className={classes.container3}>
      <img className={classes.img1} src={photo} alt="" />
      <img className={classes.img2} src={dash} alt="" />
      <div className={classes.itsownformat}>
        <h1 className={classes.h1}>Выбирайте свой формат обучения</h1>
        <p className={classes.p}>
          Смотрите видео-лекции в удобное для вас время, обучайтесь на
          тренажере, участвуйте в интенсивных воркшопах
          <br /> с командой или проходите курс с гибким расписанием.
          <br /> На нашей платформе каждый найдет подходящий формат.
        </p>
        <button className={classes.allcourses}>Все курсы</button>
      </div>
    </div>
  );
}
export default TrainingFormats;
