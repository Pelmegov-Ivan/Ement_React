import classes from "./JoinUs.module.css";
function JoinUs() {
  return (
    <div className={classes.joinUs}>
      <div className={classes.div}>
        <h1 className={classes.h1}>Присоединяйтесь к E-Mentor сейчас</h1>
        <p className={classes.p}>
          Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы
          подарим вам дополнительные лекции по любому направлению бесплатно!
        </p>
        <button className={classes.button}>Выбрать тариф</button>
      </div>
    </div>
  );
}
export default JoinUs;
