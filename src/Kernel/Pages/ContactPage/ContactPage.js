import "./ContactPage.css";
import { Images } from "../../../assets/images/images";
import { Icons } from "../../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

export const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="ContactPage">
      <div className="ContactPageHeader">
        <div className="ContactPageHeaderName">jose_jon</div>
        <button className="HomeButton" onClick={() => navigate("/home")}>
          Home
        </button>
      </div>
      <h2>
        Thanks for taking the time to reach out. How can I help you today?
      </h2>
      <div className="ContactPageForm"></div>
    </div>
  );
};
