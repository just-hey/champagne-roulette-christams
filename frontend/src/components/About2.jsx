import React, { Component } from 'react';

class About2 extends Component {
  handleClick = () => {
    console.log('hey from about');
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div className="about">
        <div className="container">
          <p>I spent high school and three years in college learning Graphic Design before choosing to get a degree in Industrial Design and still enjoy embarking on graphic projects today.</p>
          <p>Creating vector graphics for <span onClick={ () => this.props.toggle('t_shirts') }>t-shirts</span> and <span onClick={ () => this.props.toggle('logos') }>logos</span> is something I really enjoy.</p>
        </div>
      </div>
    );
  }
}

export default About2;