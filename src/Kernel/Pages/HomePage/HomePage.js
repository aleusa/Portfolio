import "./HomePage.css";
import { Images } from "../../../assets/images/images";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePageIntroSection">
        <div className="HomePageHeader">
          <div className="HomePageHeaderName">jose_jon</div>
          <div className="HomePageHeaderButtons">
            <button className="ResumeButton">Resume</button>
            <button className="SayHelloButton">Say Hello</button>
          </div>
        </div>
        <div className="HomePageIntroduction">
          <div className="HomePageIntroductionLeftSide">
            <div className="HomePageIntroductionTitle">
              Software Engineer with a Passion for Innovation
            </div>
            <div className="HomePageIntroductionLineBreak" />
            <div className="HomePageIntroductionDescription">
              With a diverse skill set and a commitment to delivering
              high-quality products, I am dedicated to providing software
              solutions that exceed the expectations of my clients.
            </div>
          </div>
          <div className="HomePageIntroductionRightSide">
            <img
              className="HomePageBackgroundImage"
              src={Images.IntroBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
