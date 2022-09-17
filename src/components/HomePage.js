import Main from "./Main";
import AboutUs from "./AboutUs";
import TrainingFormats from "./TrainingFormats";
import PopularCourses from "./PopularCourses";
import JoinUs from "./JoinUs";
function HomePage() {
  return (
    <div>
      <div className="container1">
        <Main />
      </div>
      <div className="container2">
        <AboutUs />
      </div>
      <TrainingFormats />
      <PopularCourses />
      <JoinUs />
    </div>
  );
}
export default HomePage;
