import React from "react";
import "../styles/Contact.css";

class Contact extends React.Component {
  handleClick = () => {
    console.log('hey from contact');
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div>
        <h1>hey it is for contact</h1>
      </div>
    );
  }
}

export default Contact;