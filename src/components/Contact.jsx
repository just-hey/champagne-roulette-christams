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
      <div className="about">
        <div className="container">
          <p>Feel free to contact me with amazing, life changing career opportunities!</p>
            <form className="form-container" onSubmit={ this.handleSubmit }>
              <div>
                <textarea
                  placeholder="Message"
                  maxLength="1000"
                  required
                  rows="30"
                  type="message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
              <div className="arrow-input-container">
                <input type="email" name="email" placeholder="email" value={ this.state.email } onChange={ this.handleChange } />
                <div className="svg-div" onClick={this.handleSubmit}>
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 31.49 31.49">
                    <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
                      C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
                      c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                    </svg>
                </div>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default Contact;