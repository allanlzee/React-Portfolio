import React, { Component } from "react";
import "./Header.css";
import Logo from "./profile.png";
import Profile from "./Manitou.png";

class Header extends React.Component {
  render() {
    return (
      <section className="welcome-grid">
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900&display=swap"
          rel="stylesheet"
        />

        <div className="header-logo">
          <div className="welcome-grid">
            <h1 className="welcome-title">
              <span className="greeting">Hi, I am </span>
              Allan Zhou
            </h1>
            <p className="welcome-subtitle">
              <strong className="bloor-ci">Bloor C.I. TOPS</strong>Class of 2023
            </p>
            <img className="header-logo-img" src={Profile} alt="@allanlzee" />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
