import React from "react";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div>
        TechLeads@2024 <a href="https://github.com/abrfahim">Abrfahim</a>
        </div>
        <Socials />
      </footer>
    </div>
  );
};

export default Footer;
