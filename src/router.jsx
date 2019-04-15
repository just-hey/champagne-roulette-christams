import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeComponent from './components/Home.jsx';
import AboutComponent from './components/About.jsx';
import About2Component from './components/About2.jsx';
import ContactComponent from './components/Contact.jsx';

function TheRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/about2" component={ About2 } />
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

function About2() {
  return (
    <About2Component></About2Component>
  );
}

function Contact() {
  return (
    <ContactComponent></ContactComponent>
  );
}

export default TheRouter;
