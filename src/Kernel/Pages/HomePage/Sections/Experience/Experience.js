import "./Experience.css";

export const Experience = () => {
  return (
    <div className="HomePageExperienceSection">
      <div className="HomePageExperienceContainer">
        <h3>Experience</h3>
        <div className="HomePageExperienceColumns">
          <div className="HomePageExperience">
            <h4>Merthin, Miami - Software Engineer 1</h4>
            <h6>December 2021 - PRESENT</h6>
            <ul>
              <li>
                Worked on QA Engineering using Playwright, an automated testing
                framework for an Electron application.
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
                Worked on a tool that lists dependencies and makes a dependency
                graph on a project. Also, creating a Github workflow to generate
                and deploy the dependency graph report to Firebase.
              </li>
            </ul>
          </div>
          <div className="HomePageExperience">
            <h4>Merthin, Miami - Software Engineer Intern</h4>
            <h6>August 2021 - December 2021</h6>
            <ul>
              <li>
                Developed a cross-platform application for Android and iOS, with
                Auth0 authentication and App Center for deployment, using React
                Native and Typescript.
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
                Organization, Introduction to Software Engineering, Information
                and Database Systems 1, Introduction to Digital Art and
                Sciences.
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
                Relevant Courses: Java Programming 1, Intro to C++ Programming,
                Calculus and Analytic Geometry 1, 2, 3, and Discrete Mathematics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
