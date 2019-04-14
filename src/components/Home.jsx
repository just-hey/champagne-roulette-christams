import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
  handleClick = () => {
    console.log('hey from home');
  };

  render() {
    const className = [
      'home'
    ];

    return (
      <div>
        <h1>hey it's home</h1>
        <div className={className.join(" ").trim()}>
          <button onClick={this.handleClick}>{this.props.aProp}</button>
        </div>
        <p>
          "Once you stop learning and evolving, you're just an asshole."
        </p>
        <hr />
        <p>
          This is the portfolio of <a href="#" href="#">Juno Cooper</a>, a creative human who is not an asshole. Constant evolution an expansion of knowledge and abilities is the cornerstone of what makes me a designer.
          I specialize in <a href="#">Industrial Design</a> & enjoy <a href="#">Graphic Design</a> when the opportunity arises.
          Currently I live in Denver, Colorado.
        </p>
      </div>
    );
  }
}

export default Home;