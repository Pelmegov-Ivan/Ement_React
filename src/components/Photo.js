import classes from "./Photo.module.css";
import one from "../img/one.png";
import two from "../img/two.png";
import three from "../img/three.png";
import four from "../img/four.png";
import five from "../img/five.png";
import six from "../img/six.png";
function Photo() {
  return (
    <div className={classes.photo}>
      <div className={classes.imgtxt}>
        <img src={one} alt="" className={classes.img} />
        <span className={classes.txt}>Катя, ведущий дизайнер TailGroup</span>
      </div>
      <div className={classes.imgtxt}>
        <img src={two} alt="" className={classes.img} />
        <span className={classes.txt}>Марина, маркетолог Headers Market</span>
      </div>
      <div className={classes.imgtxt}>
        <img src={three} alt="" className={classes.img} />
        <span className={classes.txt}>Сава, PR-менеджер Central Media</span>
      </div>
      <div className={classes.imgtxt}>
        <img src={four} alt="" className={classes.img} />
        <span className={classes.txt}>Паша, основатель LeadCompany</span>
      </div>
      <div className={classes.imgtxt}>
        <img src={five} alt="" className={classes.img} />
        <span className={classes.txt}>Саша, главный редактор Just Journal</span>
      </div>
      <div className={classes.imgtxt}>
        <img src={six} alt="" className={classes.img} />
        <span className={classes.txt}>Лёня, ведущий разработчик Ymail</span>
      </div>
    </div>
  );
}
export default Photo;
