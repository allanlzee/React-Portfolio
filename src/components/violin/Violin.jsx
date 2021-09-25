import React, { Component } from 'react';
import "./Violin.css";
import Concerto from "./Images/Concerto.png";
import Allegro from "./Images/Allegro.png";
import Chamber1 from "./Images/Chamber.png";
import Chamber2 from "./Images/Chamber2.png"; 

class Violin extends React.Component {
    render() { 
        return (
          <section className="violin">
            <h2 className="violin-section-title">Violin Performances</h2>

            <h3 className="violin-section-subtitle">Solo</h3>

            <div className="violin-section"> 
                <div className="performances-concerto solo-performances">
                  <p className="piece">
                    <span className="piece-name">Concerto in G Major</span> <br></br>W.A. Mozart
                  </p>

                  <a
                    className="violin-video"
                    href="https://www.youtube.com/embed/1JLYBkrh8iM?start=4024"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="thumbnail"
                      alt="Concerto in G Major -- W.A. Mozart"
                      src={Concerto}
                    />
                  </a>
                </div>

                <div className="performances-allegro solo-performances">
                  <p className="piece">
                    <span className="piece-name">Allegro Brillante </span><br></br>W.T. Have
                  </p>

                  <a
                    className="violin-video"
                    href="https://www.youtube.com/watch?v=smqnNrgdz7E&ab_channel=UniversitySettlementMusic%26ArtsSchool"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="thumbnail"
                      alt="Concerto in G Major -- W.A. Mozart"
                      src={Allegro}
                    />
                  </a>
                </div>
                    
            </div>
          </section>
        ); 
    }
}
 
export default Violin;