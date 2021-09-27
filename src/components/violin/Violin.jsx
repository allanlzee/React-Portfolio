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

        <div className="header-waves-opacity-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    );
  }
}

export default Violin;
