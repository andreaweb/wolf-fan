import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import Homepage from './components/homePage.js';
import Thumbpage from './components/thumbPage.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/thumbPage' component={Thumbpage} />
        </Switch>
      </div>
    );
  }
}

export default App;
