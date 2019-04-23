import React, { Component } from 'react';
import '../styles/Contact.css';

class adminLogin extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

    handleSubmit = () => {

    }

    render() {
        return (
            <div className="about container">
                <div className="form">  
                    <div className="login">   
                        <h1>Hai, SENPAI!</h1>
                        <form className="form-container" onSubmit={ ()=> this.loginSubmit() }>
                            <label>
                                Email Address
                            </label>
                            <input type="email" required />
                            <label>
                                Password
                            </label>
                            <input type="password" required />
                            <div className="arrow-input-container">
                                <div className="svg-div" onClick={ this.handleSubmit }>
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
            </div>
        );
    }
}

export default adminLogin;