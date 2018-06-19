import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  // Route,
  // NavLink,
  HashRouter
} from "react-router-dom";
// import Home from "./Home";
// import Stuff from "./Stuff";
// import Contact from "./Contact";
// import Admin from "./Admin";
// import About from "./About";
// import Menu from "./Menu";

class Footer extends Component {
  render() {
    return (
      <HashRouter>
      <div className="Footer">
         <h1>Footer</h1>
          Made with Love by Kevin Huelsmann

      </div>
      </HashRouter>
    );
  }
}

export default Footer;
