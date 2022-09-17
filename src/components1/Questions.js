import classes from "./Questions.module.css";
function Questions() {
  return (
    <div className={classes.questions}>
      <h1 className={classes.h1}>Часто задаваемые вопросы</h1>
      <div className={classes.question}>
        <h2 className={classes.h2}>
          Я никогда не занимался анимацией. У меня получится?
        </h2>
        <span className={classes.span}>
          Конечно! Этот курс рассчитан для новичков, для тех, кто еще совсем
          ничего не умеет. Курс интенсивный, но оно того стоит. Главное
          выполняйте домашнее задание в срок. Вам всегда будут помогать тренеры
          и кураторы. Все получится!
        </span>
      </div>
      <div className={classes.question}>
        <h2 className={classes.h2}>
          Насколько курс интенсивный? Я смогу совмещать с работой?
        </h2>
        <span className={classes.span}>
          Курс довольно интенсивный, но, при большом желании, вы будете успевать
          все. Вам понадобится 2-3 свободных часа в день на изучение материала и
          выполнение домашних заданий.
        </span>
      </div>
      <div className={classes.question}>
        <h2 className={classes.h2}>Какие программы мне нужны для обучения?</h2>
        <span className={classes.span}> </span>
      </div>
      <div className={classes.question}>
        <h2 className={classes.h2}>
          Есть ли рассрочка или дополнительные скидки?
        </h2>
        <span className={classes.span}> </span>
      </div>
      <div className={classes.question}>
        <h2 className={classes.h2}>Вы помогаете с трудоустройством? </h2>
        <span className={classes.span}> </span>
      </div>
    </div>
  );
}
export default Questions;
