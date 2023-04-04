import "./HomePage.css";
import { Images } from "../../../assets/images/images";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePageHeader">
        <h1>Frontend Engineer</h1>
        <img className="HomePageSelfPortrait" src={Images.SelfPortrait} />
        <img className="HomePageCodingImage" src={Images.Coding} />
      </div>
      <div className="HomePageDescription"></div>
    </div>
  );
};
