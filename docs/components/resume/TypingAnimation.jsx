import React, { Component } from "react";
import "./TypingAnimation.css";

class TypingAnimation extends React.Component {
  render() {
    return (
      <div className="typewriter-section">
        <h2 className="section-title-typewriter">About Me</h2>

        <div className="typewriter-sentences">
          <p className="typewriting-animation tops">
            Grade 11 TOPS Student.
          </p>
          <p className="typewriting-animation violinist">
            Level 10 Violinist.{" "}
          </p>
          <p className="typewriting-animation basketball">
            Basketball Player.{" "}
          </p>
          <p className="typewriting-animation prog-lead">
            Robotics Programming Lead.{" "}
          </p>
          <p className="typewriting-animation aspire">
            Aspiring Software Engineer.{" "}
          </p>{" "}
          <br></br>
        </div>
      </div>
    );
  }
}

export default TypingAnimation;
