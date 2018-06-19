import React, { Component } from "react";
import * as firebase from 'firebase';
 
class About extends Component {
constructor() {
    super();
    this.state = {
      about: " "
    };
  }

 componentDidMount() {
    // const rootRef = firebase.database().ref().child('react');
    const restaurantRef = firebase
      .database()
      .ref()
      .child("restaurant");
    const aboutRef = restaurantRef.child("about");


    aboutRef.on("value", snap => {
      this.setState({
        about: snap.val()
      });
    });
  }


  render() {
    return (
      <div>
        <h1>About Page</h1>
                <h2>About:</h2>
        <h4> {this.state.about}</h4>
      </div>
    );
  }
}
 
export default About;