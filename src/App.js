import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  Route,
  // NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
// import Stuff from "./Stuff";
import Contact from "./Contact";
import Admin from "./Admin";
import About from "./About";
import Menu from "./Menu";
import * as firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 10
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
      <h1> {this.state.speed}</h1>  
      <HashRouter>
      <div className="App">
   
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/menu" component={Menu}/>
          </div>
      </div>
      
      </HashRouter>
      </div>
    );
  }
}

export default App;
