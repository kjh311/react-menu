import React, { Component } from "react";
import * as firebase from "firebase";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      tagline: " ",
      titleBackground: " "
    };
  }

  componentDidMount() {
    // const rootRef = firebase.database().ref().child('react');
    const restaurantRef = firebase
      .database()
      .ref()
      .child("restaurant");
    const nameRef = restaurantRef.child("name");
    const tagLineRef = restaurantRef.child("tagline");
    const titleBackgroundRef = restaurantRef.child("titleBackground");

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

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <h2>Name:</h2>
        <h4> {this.state.name}</h4>
        <h2>Tagline:</h2>
        <h4> {this.state.tagline}</h4>
        <h2>Title Image:</h2>
        <img
          src={this.state.titleBackground}
          alt="Italian Trulli"
          height="100"
          width="150"
        />
      </div>
    );
  }
}

export default Home;
