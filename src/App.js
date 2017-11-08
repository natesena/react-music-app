import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './Views/Login.js'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    );
  }
}

export default App;
