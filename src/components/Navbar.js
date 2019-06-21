import React from "react";


class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: "0",
      hamburger: "hamburger hamburger--squeeze",
      mobile: "mobileNav",
      mobileNav: ""
    };
    this.handleResize = this.handleResize.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.closenav = this.closenav.bind(this)
  }

  handleResize() {
    if (window.innerWidth < 670) {
      this.setState({mobile: "mobileNav", mobileNav: "navbar mobile"})
      this.setState({opacity:1})
    } else {
      this.setState({mobile: "", mobileNav: "navbar"})
      this.setState({hamburger: "hamburger hamburger--squeeze"})
      this.setState({opacity: window.scrollY / 300})
    }
  }
  
  componentDidMount() {
    this.handleScroll()
    this.handleResize()
    window.addEventListener("resize", this.handleResize)
    window.addEventListener("resize", this.handleResize)
  }

  handleScroll() {
    document.addEventListener("scroll", () => {
      if (window.innerWidth > 670) {
        this.setState({ opacity: window.scrollY / 300 });
      } else {
        this.setState({ opacity: 1 });
      }
    })
  }

  handleClick() {
    this.state.hamburger === "hamburger hamburger--squeeze" ? 
    this.setState({hamburger: "hamburger hamburger--squeeze is-active", mobile: "mobileNav active"}) :
    this.setState({hamburger: "hamburger hamburger--squeeze", mobile: "mobileNav"})
  }

  closenav() {
    this.setState({hamburger: "hamburger hamburger--squeeze", mobile: "mobileNav"})
  }

  render() {
    return (
      <div
        className="navbar"
          style={{
          backgroundColor: "rgba(35,35,35," + this.state.opacity + ")",
          boxShadow: "0 0 5px 0 rgba(0,0,0," + this.state.opacity + ")"
        }}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h1>
          <a href="#">Monogram Projects</a>
        </h1>
        <button className={this.state.hamburger} type="button" onClick={this.handleClick}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button >
        <div className={this.state.mobile}>
          <ul>
            <li>
              <a href="#portfolio" onClick={this.closenav}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" onClick={this.closenav}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
