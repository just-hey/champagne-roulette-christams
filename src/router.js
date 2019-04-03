import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeComponent from './components/Home.js';
import AboutComponent from './components/About.js';
import ContactComponent from './components/Contact.js';

function TheRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <HomeComponent aProp="im a prop"></HomeComponent>
  );
}

function About() {
  return (
    <AboutComponent></AboutComponent>
  );
}

function Contact() {
  return (
    <ContactComponent></ContactComponent>
  );
}

export default TheRouter;
