import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { data1 } from "../Data/data";

function Homepage() {
  return (
    <React.Fragment>
      {/* Pacman Landing Container */}
      <div className="container_landing">
        <div className="pacman"></div>
        <div className="ghost"></div>
        <div className="ghost"></div>
        <div className="ghost"></div>
        <div className="ghost"></div>
        <div className="text"></div>
      </div>
      {/* Heading of Cards */}
      <div className="header_homepage">
        <h1> Game on!!</h1>
      </div>
      {/* The content in the cards came from mapping data1, if you want to contribute a game kindly add it to data1 in the Data folder first*/}
      <div className="body_card">
        <div className="container_card">
          {data1.map((row) => (
            <div className="card">
              <div className="content">
                <h2>{row.serial_number}</h2>
                <h3>{row.main_heading}</h3>
                <p>{row.about} </p>
                {/* Create a route for your game and add it in AllRoutes.js in Routes folder then add the link in data1 in Data Folder */}
                <Link to={row.link_game} className="link">Play now !!!</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="aboutsec">
      <h1 className="about">About</h1>
      <p className="aboutcon">At games and go we tried to bring back to you the games that most of us played during our childhood and that too with a UI that makes you feel that time has reversed back and you could relive those moments again.
      </p>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
