import React from "react";
// import Admin from "./Admin";
import Login from "./Login";
import Crud from "./Crud";
import fire from "./config/Fire";









export default class LoginPage extends React.Component {

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
      {this.state.user ? (<Crud />) : (<Login />)}

      </div>
    );
  }
}

// export default Admin;
