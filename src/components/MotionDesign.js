import classes from "./MotionDesing.module.css";
import Nav1 from "../components1/Nav1";
import Way from "../components1/Way";
import Main1 from "../components1/Main1";
import CurrentKnowledge from "../components1/CurrentKnowledge";
import Skills from "../components1/Skills";
import Discount from "../components1/Discount";
import Questions from "../components1/Questions";
function MotionDesign() {
  return (
    <div className={classes.motionDesign}>
      <Nav1 />
      <Way />
      <Main1 />
      <CurrentKnowledge />
      <Skills />
      <Discount />
      <Questions />
    </div>
  );
}
export default MotionDesign;
