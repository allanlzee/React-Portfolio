import React, { Component } from 'react';
import "./Projects.css"; 

class Projects extends React.Component {
    render() { 
        return (
          <div className="coding-project-grid">
            <div className="android-development coding-projects">
              <b>Java Android App Development</b>

              <a href="https://github.com/allanlzee/AzTech-Personal">
                <img
                  src="Project-Pictures/android-studio.png"
                  className="project-pictures"
                  alt="Android Studio"
                />
              </a>
            </div>

            <div className="python coding-projects">
              <b>Python Computer Vision</b>

              <a
                href="https://github.com/allanlzee/Open-CV-Mediapipe"
                className="coding-projects"
              >
                <img
                  src="Project-Pictures/computer-vision.png"
                  className="project-pictures"
                  alt="Python Computer Vision using OpenCV"
                />
              </a>
            </div>

            <div className="front-end-development coding-projects">
              <b>Front End Development</b>

              <a
                href="https://github.com/allanlzee/Portfolio-Revised"
                className="coding-projects"
              >
                <img
                  src="Project-Pictures/react-front-end.png"
                  className="project-pictures"
                  alt="Front-End Development"
                />
              </a>
            </div>

            <div className="api-projects coding-projects">
              <b>API Projects</b>

              <a
                href="https://github.com/allanlzee/Discord-Bot"
                className="coding-projects"
              >
                <img
                  src="Project-Pictures/discord-bot.png"
                  className="project-pictures"
                  alt="discord bot"
                />
              </a>
            </div>
          </div>
        );
    }
}
 
export default Projects;