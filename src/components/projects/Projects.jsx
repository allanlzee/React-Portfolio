import React, { Component } from 'react';
import "./Projects.css";
import Android from "./Images/android-studio.png";
import Python from "./Images/computer-vision.png";
import API from "./Images/discord-bot.png";
import Front_End from "./Images/portfolio-project.png";
import Front_End_React from "./Images/front-end-react.png"; 
import Dart_Programming from "./Images/dart-programming.png"; 

class Projects extends React.Component {
    render() { 
      return (
        <section>
          <h2 className="coding-projects-title">Coding Projects</h2>

          <div className="coding-project-grid">
            <div className="android-development coding-projects">
              <b className="row1">Java Android App Development</b>

              <a href="https://github.com/allanlzee/AzTech-Personal">
                <img
                  src={Android}
                  className="project-pictures"
                  alt="Android Studio"
                />
              </a>
            </div>

            <div className="python coding-projects">
              <b className="row1">Python Computer Vision</b>

              <a
                href="https://github.com/allanlzee/Open-CV-Mediapipe"
                className="coding-projects"
              >
                <img
                  src={Python}
                  className="project-pictures"
                  alt="Python Computer Vision using OpenCV"
                />
              </a>
            </div>

            <div className="front-end-development coding-projects">
              <b className="row2">HTML & CSS Development</b>

              <a
                href="https://github.com/allanlzee/Portfolio-Revised"
                className="coding-projects"
              >
                <img
                  src={Front_End}
                  className="project-pictures"
                  alt="Front-End Development"
                />
              </a>
            </div>

            <div className="api-projects coding-projects">
              <b className="row2">API Projects</b>
              <a
                href="https://github.com/allanlzee/Discord-Bot"
                className="coding-projects"
              >
                <img src={API} className="project-pictures" alt="discord bot" />
              </a>
            </div>

            <div className="react coding-projects">
              <b className="row3">React JS Development</b>
              <a
                href="https://github.com/allanlzee/React-Portfolio"
                className="coding-projects"
              >
                <img
                  src={Front_End_React}
                  className="project-pictures"
                  alt="front-end"
                />
              </a>
            </div>

            <div className="flutter coding-projects">
              <b className="row3">Flutter with Dart</b>
              <a
                href="https://github.com/allanlzee/Flutter-Scheduler"
                className="coding-projects"
              >
                <img
                  src={Dart_Programming}
                  className="project-pictures"
                  alt="flutter dart"
                />
              </a>
            </div>
          </div>
        </section>
      );
    }
}
 
export default Projects;
