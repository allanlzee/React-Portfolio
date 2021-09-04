import React, { Component } from "react";
import "./Sidebar.css";
import Logo from "./images/Logo.png";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img className="profile-img" src={Logo} alt="profile" />
        </div>

        <div className="contact-info">
          <p className="name">Allan Zhou</p>
          <p className="email">allanlinzhou@gmail.com</p>
          <p className="social">@allanlzee</p>
        </div>

        <div className="navigation">
          <p className="introduction nav-link">Introduction</p>
          <p className="resume nav-link">Resume</p>
          <p className="projects nav-link">Projects</p>
          <p className="violin nav-link">Violin</p>
          <p className="footer nav-link">Contact</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
