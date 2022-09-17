import Number from "./Number";
import LearnFromTheBest from "./LearnFromTheBest";
import classes from "./AboutUs.module.css";
import Photo from "./Photo";
function AboutUs() {
  return (
    <div className={classes.div}>
      <Number />
      <LearnFromTheBest />
      <Photo />
    </div>
  );
}
export default AboutUs;
