import { Icons } from "../../../../../assets/icons/icons";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="HomePageSkillSection">
      <div className="HomePagePresentationContainer">
        <img src={Icons.DiagonalArrow} />
        <div className="HomePagePresentation">
          <div className="HomePagePresentationTitle">
            hello world, i'm jose jon
          </div>
          <div className="HomePagePresentationDescription">
            In 2021, I obtained a Bachelor's degree in Computer Science with a
            Minor in Economics from the University of Florida. Presently, I am
            employed at an innovative startup company that primarily specializes
            in consulting services. As a result, I have honed my expertise in a
            diverse range of coding languages and essential skills, encompassing
            Agile Development, Problem-Solving, Client Interaction, Version
            Control, and more.
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
  );
};
