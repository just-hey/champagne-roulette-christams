import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  handleClick = () => {
    console.log('hey from contact');
    this.props.clickHandler(this.props.name);
  };

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      message: ''
    };
  };

  handleChange = (e, { name, value }) => this.setState({ [ name ]: value });

  handleSubmit = (event) => {
    alert('Thanks nerd!');
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>hey it is for contact</h1>
        <p>Feel free to contact me with amazing, life changing career opportunities!</p>
        <form onSubmit={ this.handleSubmit }>
        <label>
            Message:
            <textarea type="message" name="message" value={ this.state.message } onChange={ this.handleChange } />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;