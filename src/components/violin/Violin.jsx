import React, { Component } from 'react';
import "./Violin.css"; 

class Violin extends React.Component {
    render() { 
        return <section className="violin-section">
            <h2 className="violin-section-title">Violin Performances</h2>

            <h3 className="violin-section-subtitle">Solo Performances</h3>

            <div className="solo-performances"> 

                <div className="performances">
                    <p className="piece-name">Concerto in G Major <br></br>W.A. Mozart</p>

                    
                </div> 

            </div>

        </section>;
    }
}
 
export default Violin;