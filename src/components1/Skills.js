import classes from "./Skills.module.css";
import skills from "../img/skills.svg";
import skills1 from "../img/skills1.svg";
import skills2 from "../img/skills2.svg";
import skills3 from "../img/skills3.svg";
function Skills() {
  return (
    <div className={classes.skills}>
      <h1 className={classes.h1}>На курсах вы научитесь</h1>
      <div className={classes.competency}>
        <div className={classes.div}>
          <span className={classes.img}>
            <img src={skills} alt="" />
            <span className={classes.span}> Анимировать объекты</span>
          </span>
          <span className={classes.txt}>
            Узнаете принципы создания инфографики, персонажной 2D флэт-анимации.
          </span>
        </div>
        <div className={classes.div}>
          <span className={classes.img}>
            <img src={skills1} alt="" />
            <span className={classes.span}> Работать с кадром</span>
          </span>
          <span className={classes.txt}>
            Изучите основные принципы анимации и работы с объектами, их
            движением в кадре.
          </span>
        </div>
        <div className={classes.div}>
          <span className={classes.img}>
            <img src={skills2} alt="" />
            <span className={classes.span}> Работать в After Effects</span>
          </span>
          <span className={classes.txt}>
            Научитесь реализовывать ваши идеи с помощью популярной программы для
            анимации
          </span>
        </div>
        <div className={classes.div}>
          <span className={classes.img}>
            <img src={skills3} alt="" />
            <span className={classes.span}>Работать со звуком</span>
          </span>
          <span className={classes.txt}>
            Освоите инструменты работы, сможете редактировать музыку в своем
            проекте.
          </span>
        </div>
      </div>
      <button className={classes.button}>Программа курса</button>
    </div>
  );
}
export default Skills;
