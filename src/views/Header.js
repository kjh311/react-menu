import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  // Route,
  NavLink,
  HashRouter
} from "react-router-dom";
// import Home from "./Home";
// import Stuff from "./Stuff";
// import Contact from "./Contact";
// import Admin from "./Admin";
// import About from "./About";
// import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
      <HashRouter>
      <div className="Header">
         <h1>Header</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>

      </div>
      </HashRouter>
    );
  }
}

export default Header;
