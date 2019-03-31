import React from "react";
import "../styles/Home.css";

class Home extends React.Component {
  handleClick = () => {
    console.log('hey from home');
  };

  render() {
    const className = [
      "home"
    ];

    return (
      <div>
        <h1>hey it's home</h1>
        <div className={className.join(" ").trim()}>
          <button onClick={this.handleClick}>{this.props.aProp}</button>
        </div>
      </div>
    );
  }
}

export default Home;