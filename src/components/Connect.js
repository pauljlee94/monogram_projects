import React from "react";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";

function Connect() {
  return (
    <div className="connect">
      <h3>Stay Connected</h3>
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={facebook} alt="Facebook icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={twitter} alt="Twitter icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={instagram} alt="Instagram icon"/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img className="icon" src={youtube} alt="Youtube icon"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Connect;
