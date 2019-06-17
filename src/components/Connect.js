import React from "react";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import twitter from "./img/twitter.png";
import youtube from "./img/youtube.png";

function Connect() {
  return (
    <div class="connect">
      <h3>Stay Connected</h3>
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <img class="icon" src={facebook} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank">
            <img class="icon" src={twitter} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img class="icon" src={instagram} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img class="icon" src={youtube} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Connect;
