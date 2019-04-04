import React, { Component } from 'react';
import '../styles/About.css';

class About2 extends Component {
  handleClick = () => {
    console.log('hey from about');
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div>
        <p>
            I spent high school and three years in college learning Graphic Design before choosing to get a degree in Industrial Design and still enjoy embarking on graphic projects today.
            Creating vector graphics for <a href="#">t-shirts</a> and <a href="#">logos</a> is something I really enjoy.
        </p>
      </div>
    );
  }
}

export default About2;