import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
  handleClick = () => {
    console.log('hey from home');
  };

  render() {
    return (
      <div className="container">
        <p>
          "Once you stop learning and evolving, you're just an asshole."
        </p>
        <hr />
        <div>
          <p>This is the portfolio of <a href="#" href="#">Juno Cooper</a>, a creative human who is not an asshole. Constant evolution an expansion of knowledge and abilities is the cornerstone of what makes me a designer.</p>
          <p>I specialize in <a href="#">Industrial Design</a> & enjoy <a href="#">Graphic Design</a> when the opportunity arises.</p>
          <p>Currently I live in Denver, Colorado.</p>
        </div>
      </div>
    );
  }
}

export default Home;