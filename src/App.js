import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import {
  Route,
  // NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./views/Home";
// import Stuff from "./Stuff";
import Contact from "./views/Contact";
import Admin from "./views/Admin";
import About from "./views/About";
import Menu from "./views/Menu";
import fire from "./config/Fire";
// import Login from "./Login";
// import Crud from "./Crud";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
        <HashRouter>
          <div className="App">
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/admin" component={Admin} />
              <Route path="/menu" component={Menu} />
              
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
