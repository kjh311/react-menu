import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';

export default class LoginPage extends React.Component{
  constructor(){
    super();
    this.state = {user:null};
    this.widget = new OktaSignIn({
      baseUrl: 'https://https://dev-742619.oktapreview.com',
      clientId: '0oafg4a56poxRFQzI0h7',
      redirectUri: 'http://localhost:3000',
      authParams: {
        issuer: 'default'
        responseType: 'id_token'
      }
    });
  }

  componentDidMount(){
    this.widget.renderEl({el:this.loginContainer},
      (response) => {
        this.setState({user: response.claims.email});
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render(){
    return(
     <div ref={(div) => {this.loginContainer = div; }} />
    );
  }
}