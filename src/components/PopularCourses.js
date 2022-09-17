import classes from "./PopularCourses.module.css";
import pic from "../img/pic.png";
import pic1 from "../img/pic1.png";
import pic2 from "../img/pic2.png";
import pic3 from "../img/pic3.png";
import { Link } from "react-router-dom";
function PopularCourses() {
  return (
    <div className={classes.popularcourses}>
      <h1 className={classes.h1}>Популярные курсы</h1>
      <div className={classes.inputs}>
        <div className={classes.inputtxt} style={{ marginLeft: 0 }}>
          <Link to="/motion">
            <input type="image" src={pic} alt="" />
          </Link>
          <span className={classes.txt}>Motion design</span>
        </div>
        <div className={classes.inputtxt}>
          <input type="image" src={pic1} alt="" />
          <span className={classes.txt}>Таргет в Instagram</span>
        </div>
        <div className={classes.inputtxt}>
          <input type="image" src={pic2} alt="" />
          <span className={classes.txt}>Эффектные презентации</span>
        </div>
        <div className={classes.inputtxt}>
          <input type="image" src={pic3} alt="" />
          <span className={classes.txt}>SMM-стратегия</span>
        </div>
      </div>
      <button className={classes.button}>Все курсы</button>
    </div>
  );
}
export default PopularCourses;
