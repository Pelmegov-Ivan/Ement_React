import { Link } from "react-router-dom";
import right from "../img/right.svg";
import classes from "./Way.module.css";
function Way() {
  return (
    <div className={classes.way}>
      <div className={classes.div}>
        <Link to="/*" className={classes.span}>
          Главная
        </Link>
        <img src={right} alt="" className={classes.img} />
        <span className={classes.span}>Курсы</span>
        <img src={right} alt="" className={classes.img} />
        <span className={classes.last}>Motion design</span>
      </div>
    </div>
  );
}
export default Way;
