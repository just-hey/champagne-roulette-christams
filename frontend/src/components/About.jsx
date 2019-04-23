import React, { Component } from 'react';

class About extends Component {
  handleClick = () => {
    console.log('hey from about');
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div className="about">
        <div className="container">
          <p>Creating beautiful machined goods is my passion.</p>
          <p>I am currently the sole designer at <span onClick={ () => this.props.toggle('sevenk')}>SevenK Wheels</span>, a company that manufactures one-off forged wheels for high end custom cars.</p>
          <p>Also, while acting as the Chief of Design at <span>Tread Global</span> I gained experience designing plastic packaging. During my time there I designed multiple child resistant packaging products for the Medicals Marijana Industry.</p>
          <p>During my free time I like to design <span>interior lighting</span> solutions.</p>
        </div>
      </div>
    );
  }
}

export default About;