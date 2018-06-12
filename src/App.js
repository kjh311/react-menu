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


class App extends Component {



  render() {
    return (
      <div> 

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
