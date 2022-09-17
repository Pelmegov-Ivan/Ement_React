import classes from "./LearnFromTheBest.module.css";
function LearnFromTheBest() {
  return (
    <div className={classes.text}>
      <h1 className={classes.h1}>Учитесь у лучших</h1>
      <p className={classes.p}>
        Наши преподаватели – профессионалы, которые добились успеха в своей
        области. Лид-дизайнеры известных студий, маркетологи крупнейших
        компаний, редакторы популярных медиа: получайте опыт из первых рук, в
        любое время. Кураторы курсов – наши лучшие выпускники, будут помогать и
        поддерживать вас на протяжении всего обучения.
      </p>
      <button className={classes.button}>Все преподаватели</button>
    </div>
  );
}
export default LearnFromTheBest;
