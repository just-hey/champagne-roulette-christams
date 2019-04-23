import React, { Component } from 'react';


class Home extends Component {
  handleClick = () => {
    console.log('hey from home');
  };

  render() {
    return (
      <div>
        <div className="home">
          <div className="container">
            <p>"Once you stop learning and evolving, you're just an asshole."</p>
            <hr />
            <div>
              <p className="no-margin">This is the portfolio of <span onClick={ () => this.props.toggle('contact') }>Juno Cooper</span>, a creative human who is not an asshole. Constant evolution an expansion of knowledge and abilities is the cornerstone of what makes me a designer.</p>
              <p>I specialize in <span onClick={ () => this.props.toggle('industrial') }>Industrial Design</span> & enjoy <span onClick={ () => this.props.toggle('graphic') }>Graphic Design</span> when the opportunity arises.</p>
              <p>Currently I live in Denver, Colorado.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;