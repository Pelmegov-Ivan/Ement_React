import classes from "./CurrentKnowledge.module.css";
import photo from "../img/Current.png";
import dash from "../img/CurrentLine.svg";
function CurrentKnowledge() {
  return (
    <div className={classes.currentKnowledge}>
      <img src={photo} alt="" className={classes.photo} />
      <img src={dash} alt="" className={classes.dash} />
      <div className={classes.div}>
        <h1 className={classes.h1}>Актуальные знания</h1>
        <p className={classes.p}>
          Мы понимаем, как быстро меняются тренды и появляются обновления.
          Поэтому мы всегда следим за всеми новинками, добавляем в программу то,
          что требуют топовые компании. Мы предлагаем вам только актуальные
          знания, чтобы вы были впереди планеты всей.
        </p>
        <button className={classes.button}>Купить курс</button>
      </div>
    </div>
  );
}
export default CurrentKnowledge;
