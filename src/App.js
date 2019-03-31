import React, { Component } from 'react';
import TheRouter from './router.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TheRouter/>
        </header>
      </div>
    );
  }
  
}

export default App;
