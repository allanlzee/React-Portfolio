import React, { Component } from "react";
import "./Violin.css";
import Concerto from "./Images/Concerto.png";
import Allegro from "./Images/Allegro.png";
import Chamber1 from "./Images/Chamber.png";
import Chamber2 from "./Images/Chamber2.png";

class Violin extends React.Component {
  render() {
    return (
      <section className="violin-section">
        <h2 className="violin-section-title">Violin Performances</h2>

        <div className="violin-grid">
          <div className="performances-concerto solo-performances">
            <p className="piece">
              <span className="piece-name">Concerto in G Major</span> <br></br>
              <span className="composer">W.A. Mozart</span>
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
              <span className="piece-name">Allegro Brillante </span>
              <br></br>
              <span className="composer">W.T. Have</span>
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

          <div className="performances-chamber1 solo-performances">
            <p className="piece">
              <span className="piece-name">Trio Op. 99 No. 3 </span>
              <br></br>
              <span className="composer">L. van Beethoven</span>
            </p>

            <a
              className="violin-video"
              href="https://www.youtube.com/watch?v=83GMP9jUu9c&ab_channel=UniversitySettlementMusic%26ArtsSchool"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="thumbnail"
                alt="Trio Op. 99 No. 3 -- L. van Beethoven"
                src={Chamber1}
              />
            </a>
          </div>

          <div className="performances-chamber2 solo-performances">
            <p className="piece">
              <span className="piece-name">S.V.P </span>
              <br></br>
              <span className="composer">Astor Piazzolla</span>
            </p>

            <a
              className="violin-video"
              href="https://www.youtube.com/watch?v=83GMP9jUu9c&ab_channel=UniversitySettlementMusic%26ArtsSchool"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="thumbnail"
                alt="S.V.P -- Astor Piazzolla"
                src={Chamber2}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Violin;
