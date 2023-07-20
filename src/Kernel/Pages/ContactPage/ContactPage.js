import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

export const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleEmailCompose = () => {
    const emailSubject = "Contact Form Submission";
    const emailBody = `Name: ${formData.name}\n\nMessage: ${formData.message}`;

    const mailtoLink = `mailto:aleusa2013@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

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
      <div className="ContactPageForm">
        <form>
          <div className="ContactPageInputContainer">
            <label htmlFor="name">Name</label>
            <input
              className="ContactPageInput"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ContactPageInputContainer">
            <label htmlFor="message">Message</label>
            <textarea
              className="ContactPageInput"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" onClick={handleEmailCompose}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
