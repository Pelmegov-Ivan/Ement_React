import classes from "./Main1.module.css";
import pic from "../img/Main1.png";
function Main1() {
  return (
    <div className={classes.main1}>
      <h1 className={classes.h1}>
        Практический курс по анимации для начинающих motion-дизайнеров
      </h1>
      <img src={pic} alt="" className={classes.img} />
      <h2 className={classes.h2}>
        Мечтаете оживлять статичные картинки и интерфейсы? Тогда этот курс для
        вас! На интенсивном 8-недельном курсе по анимации вы получите мощную
        базу.
      </h2>
      <p className={classes.p}>
        <span>
          Анимация шейпов и текста, работа с векторными фигурами и растровыми
          изображениями, настройка программы After Effects и эффектный монтаж.
          Всему этому вы научитесь на курсе Motion Design. Вместе с
          преподавателями вы изучите принципы анимации и разберетесь с After
          Effects раз и навсегда.
        </span>
        <br />
        <span>
          К концу курса вы сделаете несколько анимационных шотов и большой
          итоговый проект, соберете достойное портфолио. За 8 недель обучения вы
          получите полную базу по motion-дизайну, а наши кураторы будут помогать
          вам на протяжении всего обучения.
        </span>
        <br /> Обучение проходит в небольших группах, к каждой привязан куратор,
        один из наших лучших выпускников. У вас всегда будет поддержка и
        обратная связь. Помимо фидбека от куратора, на каждое домашнее задание
        вы получаете разбор тренера.
      </p>
      <div className={classes.numbers}>
        <div className={classes.div}>
          <span className={classes.number}>8 </span>
          <span className={classes.txt}>
            недель интенсивного обучения, занятия 3 раза в неделю
          </span>
        </div>
        <div className={classes.div}>
          <span className={classes.number}>24 </span>
          <span className={classes.txt}>
            урока и домашних заданий с проверкой от тренера
          </span>
        </div>
        <div className={classes.div}>
          <span className={classes.number}>7 </span>
          <span className={classes.txt}>
            работ в портфолио по окончании курса, 6 шотов и 1 итоговая работа
          </span>
        </div>
        <div className={classes.div}>
          <span className={classes.number}>4 </span>
          <span className={classes.txt}>
            студента в каждой группе, у каждой группы свой куратор
          </span>
        </div>
      </div>
    </div>
  );
}
export default Main1;
