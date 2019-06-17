import React from "react";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: "0"
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      this.setState({ opacity: window.scrollY / 300 });
    });
  }

  render() {
    return (
      <div
        className="navbar"
        style={{
          backgroundColor: "rgba(45,45,45," + this.state.opacity + ")",
          boxShadow: "0 0 5px 0 rgba(0,0,0," + this.state.opacity + ")"
        }}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h1>
          <a href="#">Monogram Projects</a>
        </h1>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
