import logo from './logo.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ComponentA} />
        <Route exact pash="/componentb" component={ComponentB} />
      <Route exact pash="/componentc" component={ComponentC} />
      </Switch>
  </Router>
  );
}

export default App
