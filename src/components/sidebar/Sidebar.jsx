import React, { Component } from "react";
import "./Sidebar.css";
import Logo from "./images/Logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      open: true,
    }
  }

  /* Incomplete */ 
  toggleSidebar() {
    this.setState({
      open: !this.state.open
    });
    console.log(this.state.open);
    
    if (this.state.open) {

    } else {
      
    }
  }
  /******************/

  render() {
    return (
      <div className="sidebar" width={this.state.open}>
        <div className="logo">
          <img className="profile-img" src={Logo} alt="profile" />

          <MenuIcon
            className="menu-icon"
            onClick={(event) => {
              this.toggleSidebar();
            }}/>
        </div>

        <div className="contact-info">
          <p className="name">Allan Zhou</p>
          <p className="email">allanlinzhou@gmail.com</p>
          <p className="social">@allanlzee</p>
        </div>

        <br></br>

        <div className="navigation">
          <a className="introduction nav-link" href="#">
            Introduction
          </a>{" "}
          <br></br>
          <br></br>
          <a
            className="resume nav-link"
            href="https://allanlzee.github.io/Portfolio/#AboutMe"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>{" "}
          <br></br> <br></br>
          <a
            className="projects nav-link"
            href="https://allanlzee.github.io/Portfolio/#Projects"
            target="_blank"
            rel="noreferrer"
          >
            Projects
          </a>{" "}
          <br></br> <br></br>
          <a
            className="violin nav-link"
            href="https://allanlzee.github.io/Portfolio/#Violin"
            target="_blank"
            rel="noreferrer"
          >
            Violin
          </a>{" "}
          <br></br> <br></br>
          <a
            className="footer nav-link"
            href="https://allanlzee.github.io/Portfolio/#Footer"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
          <br></br> <br></br>
        </div>

        <div className="contact-icons">
          <InstagramIcon
            className="icon"
            onClick={(event) =>
              (window.location.href = "https://www.instagram.com/allanlzee/")
            }
          />
          <LinkedInIcon
            className="icon"
            onClick={(event) =>
              (window.location.href = "https://www.smartr.me/profile")
            }
          />
          <GitHubIcon
            className="icon"
            onClick={(event) =>
              (window.location.href = "https://github.com/allanlzee")
            }
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;

// <SidebarOption className="menu-icon" Icon={MenuIcon} title="Menu" />
