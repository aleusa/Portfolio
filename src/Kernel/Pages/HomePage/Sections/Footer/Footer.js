import { Icons } from "../../../../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="HomePageFooterSection">
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
      <div className="HomePageFooterContainer">
        <h4>jose_jon</h4>
        <div className="HomePageFooter">
          <h6>Email</h6>
          <p>aleusa2013@gmail.com</p>
        </div>
        <div className="HomePageFooter">
          <h6>Phone</h6>
          <p>786-366-8069</p>
        </div>
      </div>
      <div className="HomePageGetInTouch">
        <div className="HomePageGetInTouchTextContainer">
          <h3>have questions?</h3>
          <h3>contact me for answers!</h3>
        </div>
        <button onClick={() => navigate("/contact")}>
          <img src={Icons.Chat} />
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};
