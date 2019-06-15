import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "img0",
      i: 0
    };
    this.increment = this.increment.bind(this)
  }

  // "url(" + response.url + ")"
  increment() {
    this.setState((prevstate) => ({
      i: (prevstate.i + 1) % 4    
    }))
  }

  componentDidMount() {
    setInterval(() => {
      this.increment()
    }, 6000);
    
  }

  render() {
    return (
      <div
        className="home"
        style={{ backgroundImage: 'url(' + require(`./img/${this.state.i}.jpeg`) + ')' }}
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