import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';
import AboutComponent from './components/About.jsx';
import About2Component from './components/About2.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import AdminPage from './components/AdminPage.jsx';
import ContactComponent from './components/Contact.jsx';
import CarouselModal from './components/CarouselModal.jsx';
import Home from './components/Home.jsx'

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
      showModal: false,
      isSenpai: false
    };
  }

  componentDidMount = async () => {
    await this.checkLoggedIn();
  }

  checkLoggedIn = () => {
    const token = localStorage.getItem('theSenpaiTokenOfApproval');
    if (token) {
      // ensure it's valid and ping BE
      // return axios.post(``, { token })
      //   .then(() => {
          this.setState({ isSenpai: true })
        // })
        // .catch(err => console.log(err, 'token issue'))
    } else {
      console.log('aint no token huurrr')
    }
  };

  saveToken = (token) => {
    // localStorage.setItem('theSenpaiTokenOfApproval', token);
    localStorage.setItem('theSenpaiTokenOfApproval', 'poop');
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
        <CarouselModal content={ this.state.modalContent } toggle={ this.toggle } showModal={ this.state.showModal }/>
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
          <Route exact path='/admin' component={ () => this.state.isSenpai ? <AdminPage /> : <AdminLogin />  } />
        </Switch>
      </React.Fragment>
    </Router>
    );
  }
}

export default App;
