import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "url(https://source.unsplash.com/1920x1080/?building,home)"
    };
  }

  componentDidMount() {
    setInterval(() => {
      fetch("https://source.unsplash.com/1920x1080/?building,home").then(
        response => {
          this.setState(() => {
            return {
              imageUrl: "url(" + response.url + ")"
            };
          });
        }
      );
    }, 6000);
  }

  render() {
    return (
      <div
        className="home"
        // style={{ backgroundImage: this.state.imageUrl }}
      >
        <div className="motto">
          <h1>Modern Design & Casual Living</h1>
          <br/>
          <span>Your Dreams, Our Design</span>
        </div>
      </div>
    );
  }
}

export default Home;