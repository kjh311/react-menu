import React from "react";
import Admin from "./Admin";
import Login from "./Login";
import Home from "./Home";
import fire from "./config/Fire";









export default class Crud extends React.Component {

    constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
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

  logout(){
    fire.auth().signOut();
  }
// {this.state.user ? (<Admin />) : (<Login />)}
  render() {
    return (
      <div>
        <h1>You are logged in!!!</h1>
        <h2>Admin Page!!!</h2>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

// export default Crud;
