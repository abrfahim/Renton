import React from "react";
import { GrMail, GrGithub, GrResume } from "react-icons/gr";
import customStyles from './custom.css'
const Socials = () => {
  
  const gmailUrl = "engr.abrarfahim@gmail.com";
  const cvUrl = "https://abrfahim.pythonanywhere.com/";
  const githubUrl = "https://github.com/abrfahim";
  const soical_icon_class = {
    width:"400%"
  }
  return (
    <div className="social navbar-item-right" style={soical_icon_class}>
      <a
        className="social-button"
        href={gmailUrl}
      >
        <GrMail />
      </a>
      <a
        // href={() => (window.location.href = telegramUrl)}
        href={cvUrl}
        className="social-button"
      >
        <GrResume />
      </a>
      <a
        href={githubUrl}
        className="social-button"
      >
        <GrGithub />
      </a>
    </div>
  );
};

export default Socials;
