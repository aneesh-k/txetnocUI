import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Search from './Components/Search';
import Home from './Components/Home'
import Post from './Components/Post';
import Nav from './Components/Nav'
import Register from './Components/Register'
class App extends Component {

  constructor(){
    super()
    let loggedIn = localStorage.getItem("token") != null;   
    this.state = {
      loggedIn
    }
    
  }
  render() {
    if (!this.state.loggedIn) {
        
    } else {
      
    }
    return (     
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Search} />
          <Route path="/posts" component={Post} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
