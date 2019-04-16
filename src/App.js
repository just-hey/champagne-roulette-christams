import React, { Component } from 'react';
import TheRouter from './router.jsx';
import './styles/App.css';
import AboutComponent from './components/About.jsx';
import About2Component from './components/About2.jsx';
import ContactComponent from './components/Contact.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TheRouter/>
        </header>
        <AboutComponent/>
        <About2Component/>
        <ContactComponent/>
      </div>
    );
  }
}

export default App;
