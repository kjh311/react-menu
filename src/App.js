import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Admin from "./Admin";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
         <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/admin" component={Admin}/>
          </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
