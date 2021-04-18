import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Navigationbar from './components/Navigationbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navigationbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
