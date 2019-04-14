import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  handleClick = () => {
    console.log('hey from about');
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div>
        <h1>hey it's about</h1>
        <p>
          Creating beautiful machined goods is my passion.
          I am currently the sole designer at <a href="/">SevenK Wheels</a>, a company that manufactures one-off forged wheels for high end custom cars.
          Also, while acting as the Chief of Design at <a href="/">Tread Global</a> I gained experience designing plastic packaging. During my time there I designed multiple child resistant packaging products for the Medicals Marijana Industry.
          During my free time I like to design <a href="/">interior lighting</a> solutions.
        </p>
      </div>
    );
  }
}

export default About;