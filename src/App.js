import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Search from './Components/Search';
import Home from './Components/Home'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Search} />
    </Router>
  );
}

export default App;
