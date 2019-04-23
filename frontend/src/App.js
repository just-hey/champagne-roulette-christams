import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import './styles/App.css';
import AboutComponent from './components/About.jsx';
import About2Component from './components/About2.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import ContactComponent from './components/Contact.jsx';
import Home from './components/Home.jsx'
import CarouselModal from './components/CarouselModal.jsx';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = { showModal: false };
  }

  toggle = (name) => {
    this.setState({
      showModal: !this.state.showModal,
      modalContent: name,
    });
  };

  render() {
    return (
    <Router className='App'>
      <React.Fragment>
        <CarouselModal content={ this.state.modalContent } showModal={ this.state.showModal }/>
        <Switch>
          <Route exact path='/' component={ () => (
            <div> 
              <Home toggle={ this.toggle } />
              {/* <AboutComponent toggle={ this.toggle }/>
              <About2Component />
              <ContactComponent />
              <AdminLogin /> */}
            </div> 
          ) } />
          <Route exact path='/home' component={ Home } /> 
          <Route exact path='/about' component={ AboutComponent } />
          <Route exact path='/about2' component={ About2Component } />
          <Route exact path='/ContactComponent' component={ ContactComponent } />
          <Route exact path='/admin' component={ AdminLogin  } />
        </Switch>
      </React.Fragment>
    </Router>
    );
  }
}

export default App;
