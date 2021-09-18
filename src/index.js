import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import TypingAnimation from "./components/resume/TypingAnimation";
import Resume from "./components/resume/Resume"; 

const TITLE = "@allanlzee";

class Document extends React.Component {
  componentDidMount() {
    document.title = TITLE;
  }

  render() {
    return null;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Document />
    <div className="react-sidebar">
      <Sidebar className="sidebar" />
    </div>

    <div className="react-body">
      <Header className="react-header"/>
      <TypingAnimation className="react-typing-animation" />
      <Resume className="react-resume" /> 
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
