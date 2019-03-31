import React from "react";
import "../styles/About.css";

class About extends React.Component {
  handleClick = () => {
    console.log('hey from about');
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div>
        <h1>hey it's about</h1>
      </div>
    );
  }
}

export default About;