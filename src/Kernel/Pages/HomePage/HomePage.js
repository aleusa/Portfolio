import "./HomePage.css";
import { Images } from "../../../assets/images/images";
import { Icons } from "../../../assets/icons/icons";
import { useNavigate } from "react-router-dom";
import resume from "../../../assets/Resume.pdf";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
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
              With a diverse skill set and a commitment to delivering
              high-quality products, I am dedicated to providing software
              solutions that exceed the expectations of my clients.
            </div>
            <div className="HomePageIntroductionSocialContainer">
              <a href="https://www.linkedin.com/in/jose-jon-165a18174/">
                <img
                  className="HomePageIntroductionSocial"
                  src={Icons.LinkedIn}
                />
              </a>
              <a href="https://github.com/aleusa/Portfolio">
                <img
                  className="HomePageIntroductionSocial"
                  src={Icons.Github}
                />
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
      <div className="HomePageSkillSection">
        <div className="HomePagePresentationContainer">
          <img src={Icons.DiagonalArrow} />
          <div className="HomePagePresentation">
            <div className="HomePagePresentationTitle">
              hello world, i'm jose jon
            </div>
            <div className="HomePagePresentationDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              mauris cursus mattis molestie a iaculis at erat. Quis hendrerit
              dolor magna eget. Purus sit amet luctus venenatis lectus magna
              fringilla urna. Natoque penatibus et magnis dis parturient. Sit
              amet commodo nulla facilisi nullam. Elit ut aliquam purus sit amet
              luctus.
            </div>
          </div>
        </div>
        <div className="HomePageSkillContainer">
          <div className="HomePageSkillTitle">Skills:</div>
          <div className="HomePageSkills">
            <div className="HomePageSkillCard">
              <img src={Icons.Languages} />
              <div className="HomePageSkillCardTitle">languages</div>
              <div className="HomePageSkillCardContent">
                <p>Java</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>C++</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>SASS</p>
                <p>Swift</p>
              </div>
            </div>
            <div className="HomePageSkillCard">
              <img src={Icons.Tools} />
              <div className="HomePageSkillCardTitle">ide/tools</div>
              <div className="HomePageSkillCardContent">
                <p>Visual Studio Code</p>
                <p>XCode</p>
                <p>IntelliJ IDEA</p>
                <p>Github</p>
              </div>
            </div>
            <div className="HomePageSkillCard">
              <img src={Icons.Databases} />
              <div className="HomePageSkillCardTitle">databases</div>
              <div className="HomePageSkillCardContent">
                <p>MongoDB</p>
                <p>Firebase</p>
              </div>
            </div>
            <div className="HomePageSkillCard">
              <img src={Icons.Libraries} />
              <div className="HomePageSkillCardTitle">libraries</div>
              <div className="HomePageSkillCardContent">
                <p>React</p>
                <p>React Native</p>
                <p>Playwright</p>
                <p>Storybook</p>
                <p>GraphQL</p>
                <p>REST</p>
                <p>App Center</p>
                <p>Sentry</p>
                <p>Auth0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HomePageExperienceSection">
        <div className="HomePageExperienceContainer">
          <h3>Experience</h3>
          <div className="HomePageExperienceColumns">
            <div className="HomePageExperience">
              <h4>Merthin, Miami - Software Engineer 1</h4>
              <h6>December 2021 - PRESENT</h6>
              <ul>
                <li>
                  Worked on QA Engineering using Playwright, an automated
                  testing framework for an Electron application.
                </li>
                <li>
                  Develop a website application using React and Storybook as a
                  Design System.
                </li>
                <li>
                  Worked on a Cloud Edge/Distribution software, making
                  connections, and agents.
                </li>
                <li>
                  Teach Lead in a cross-platform React Native productivity
                  application for a client.
                </li>
                <li>
                  Worked on a tool that lists dependencies and makes a
                  dependency graph on a project. Also, creating a Github
                  workflow to generate and deploy the dependency graph report to
                  Firebase.
                </li>
              </ul>
            </div>
            <div className="HomePageExperience">
              <h4>Merthin, Miami - Software Engineer Intern</h4>
              <h6>August 2021 - December 2021</h6>
              <ul>
                <li>
                  Developed a cross-platform application for Android and iOS,
                  with Auth0 authentication and App Center for deployment, using
                  React Native and Typescript.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="HomePageExperienceContainer">
          <h3>Education</h3>
          <div className="HomePageExperienceColumns">
            <div className="HomePageExperience">
              <h4>University of Florida, Gainesville</h4>
              <h5>Bachelor of Science in Computer Science</h5>
              <h6>August 2019 - December 2021</h6>
              <ul>
                <li>GPA: 3.63/4.00</li>
                <li>
                  Relevant Courses: Programming Fundamentals 1 and 2,
                  Computational Linear Algebra, Application Discrete Structures,
                  Data Structure/Algorithms, Introduction to Computer
                  Organization, Introduction to Software Engineering,
                  Information and Database Systems 1, Introduction to Digital
                  Art and Sciences.
                </li>
              </ul>
            </div>
            <div className="HomePageExperience">
              <h4>Miami Dade College, Miami</h4>
              <h5>Associate in Arts</h5>
              <h6>AUGUST 2015 - MAY 2019</h6>
              <ul>
                <li>GPA: 3.97/4.00</li>
                <li>
                  Relevant Courses: Java Programming 1, Intro to C++
                  Programming, Calculus and Analytic Geometry 1, 2, 3, and
                  Discrete Mathematics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="HomePageInfoSection">
        <div className="HomePageConnectContainer">
          <h4>connect</h4>
          <div className="HomePageConnect">
            <a href="https://www.linkedin.com/in/jose-jon-165a18174/">
              ↗ LinkedIn
            </a>
          </div>
          <div className="HomePageConnect">
            <a href="https://github.com/aleusa/Portfolio">↗ GitHub</a>
          </div>
        </div>
        <div className="HomePageInfoContainer">
          <h4>jose_jon</h4>
          <div className="HomePageInfo">
            <h6>Email</h6>
            <p>aleusa2013@gmail.com</p>
          </div>
          <div className="HomePageInfo">
            <h6>Phone</h6>
            <p>786-366-8069</p>
          </div>
        </div>
        <div className="HomePageGetInTouch">
          <div className="HomePageGetInTouchTextContainer">
            <h3>have questions?</h3>
            <h3>contact me for answers!</h3>
          </div>
          <button>
            <img src={Icons.Chat} />
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
};
