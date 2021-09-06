import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

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
    <div className="react-body">
      <Sidebar />
      <Header />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
