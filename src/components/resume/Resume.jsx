import React, { Component } from 'react';
import "./Resume.css"; 

class Resume extends React.Component {
    render() { 
        return (
          <div className="personal-resume">
            <h2 className="resume-title">Resume</h2>

            <div className="experience-list">
              <b className="resume-heading work">Job Experience</b> <br></br>
              <p className="list-point">
                <b className="title">A&W Team Member</b> <br></br>June 2021 -
                September 2021
              </p>
              <b className="resume-heading leadership">Leadership Experience</b>{" "}
              <br></br>
              <p className="list-point">
                <b className="title">Robotics Programming Lead, Arctos 6135</b>
                <br></br>May 2021 - Present
              </p>
              <p className="list-point">
                <b className="title">
                  President of Bloor C.I. Python A.I. Club
                </b>
                <br></br>August 2021 - Present
              </p>
              <b className="resume-heading volunteer">Volunteer Experience</b>{" "}
              <br></br>
              <p className="list-point">
                <b className="title">
                  Robotics Camp Ursa Minor, Coding Counsellor
                </b>
                <br></br>May 2021 - August 2021
              </p>
              <p className="list-point">
                <b className="title">Camp GTA Volunteer</b>
                <br></br>July 2019 - August 2019
              </p>
            </div>
          </div>
        );
    }
}
 
export default Resume;