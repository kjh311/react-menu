import React, { Component } from "react";
import * as firebase from 'firebase';
 
class Menu extends Component {
	constructor() {
    super();
    this.state = {
      menu: " "
    };
  }

   componentDidMount() {
    // const rootRef = firebase.database().ref().child('react');
    const restaurantRef = firebase
      .database()
      .ref()
      .child("restaurant");
    const menuRef = restaurantRef.child("menu");



    menuRef.on("value", snap => {
      this.setState({
        menu: snap.val()
      });
    });


  }


  render() {
    return (
      <div>
        <h1>Menu Page</h1>
         <h2>Menu:</h2>



      </div>
    );
  }
}
 
export default Menu;