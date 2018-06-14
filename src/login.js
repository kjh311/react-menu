import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email:'',
      password:''
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(e) {
    this.setState ({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>

      <div className="loginForm col-md-12">
      <h1>Administrator Login:</h1>
      <form>
      <div className="form-group">
      <label htmlFor="exampleInputEmail">Email Address</label>
      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" 
      className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
      </div>

      <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input  value={this.state.password} onChange={this.handleChange} type="password" name="password"
      className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
      <p>To create a new Admin user, visit your Firebase account.</p>
      </form>

      </div>

      </div>
    );
  }

// <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
}

export default Login;