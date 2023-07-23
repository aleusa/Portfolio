import { Images } from "../../../../../assets/images/images";
import { Icons } from "../../../../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import resume from "../../../../../assets/Resume.pdf";
import "./Intro.css";

export const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="HomePageIntroSection">
      <div className="HomePageHeader">
        <div className="HomePageHeaderName">jose_jon</div>
        <div className="HomePageHeaderButtons">
          <a
            className="ResumeButton"
            href={resume}
            download={"Resume.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Icons.Download} />
            Resume
          </a>
          <button
            className="SayHelloButton"
            onClick={() => navigate("/contact")}
          >
            Say Hello
          </button>
        </div>
      </div>
      <div className="HomePageIntroduction">
        <div className="HomePageIntroductionLeftSide">
          <div className="HomePageIntroductionTitle">
            Software Engineer with a Passion for Innovation
          </div>
          <div className="HomePageIntroductionLineBreak" />
          <div className="HomePageIntroductionDescription">
            Welcome to my portfolio built with React! Here, I highlight my
            skills in web development and my experience in the industry. As a
            passionate developer, I enjoy crafting user-friendly and visually
            appealing websites.
          </div>
          <div className="HomePageIntroductionSocialContainer">
            <a href="https://www.linkedin.com/in/jose-jon-165a18174/">
              <img
                className="HomePageIntroductionSocial"
                src={Icons.LinkedIn}
              />
            </a>
            <a href="https://github.com/aleusa/Portfolio">
              <img className="HomePageIntroductionSocial" src={Icons.Github} />
            </a>
          </div>
        </div>
        <div className="HomePageIntroductionRightSide">
          <img
            className="HomePageBackgroundImage"
            src={Images.IntroBackground}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="HomePageLineBreak" />
      </div>
    </div>
  );
};
