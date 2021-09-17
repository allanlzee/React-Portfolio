import React, { Component } from 'react';
import "./Resume.css"; 

class Resume extends React.Component {
    render() { 
        return (
          <div className="personal-resume">
            <h2 className="resume-title">Resume</h2>

            <div className="experience-list">
                <b className="resume-heading">Job Experience</b> <br></br>
                    
                <p className="list-point">A&W Team Member <br></br>June 2021 - September 2021</p> 
                    
            </div>
          </div>
        );
    }
}
 
export default Resume;