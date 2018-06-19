import React from "react";
// import Admin from "./Admin";
// import Login from "./Login";
// import Home from "./Home";
import fire from "../config/Fire";
import * as firebase from "firebase";

export default class Crud extends React.Component {

    constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      user:{},
    }
  }

    componentDidMount() {
      this.authListener();
    // const rootRef = firebase.database().ref().child('react');



    const restaurantRef = firebase
      .database()
      .ref()
      .child("restaurant");
    const nameRef = restaurantRef.child("name");
    const menuRef = restaurantRef.child("menu");

    const tagLineRef = restaurantRef.child("tagline");
    const titleBackgroundRef = restaurantRef.child("titleBackground");

    // console.log(JSON.stringify(nameRef));
    // console.log(menuRef);

    menuRef.on("value", snap => {
      this.setState({
        menu: snap.val()
      });
    });


    nameRef.on("value", snap => {
      this.setState({
        name: snap.val()
      });
    });

    titleBackgroundRef.on("value", snap => {
      this.setState({
        titleBackground: snap.val()
      });
    });

    tagLineRef.on("value", snap => {
      this.setState({
        tagline: snap.val()
      });
    });
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

  render() {
    return (
      <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">

        <h1>You are logged in!!!</h1>
        <h2>Admin Page!!!</h2>
	  

        <button className="btn btn-danger" onClick={this.logout}>Logout</button>

        <table className="table ">

  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Name of Business:</td>
      <td><input placeholder={this.state.name}></input></td>

    </tr>
    <tr>
      <th scope="row"></th>
      <td>Jacob</td>
      <td>Thornton</td>

    </tr>

  </tbody>
</table>
      </div>
      <div className="col-md-3"></div>
      </div>
    );
  }
}

