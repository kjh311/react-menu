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
    const menuTitleRef = menuRef.child("menuTitle");
    // const burgerRef = menuRef.child("burger");


    menuRef.on("value", snap => {
      this.setState({
        menu: snap.val()
      });
    });

    menuTitleRef.on("value", snap => {
      this.setState({
        menuTitle: snap.val()
      });
    });
    // burgerRef.on("value", snap => {
    //   this.setState({
    //     burger: snap.val()
    //   });
    // });
  }


  render() {
    return (
      <div>
        <h1>Menu Page</h1>
         <h2>Menu:</h2>
         <h4> {this.state.menuTitle}</h4>


      </div>
    );
  }
}
 
export default Menu;