import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';

export default class LoginPage extends React.Component{
  constructor(){
    super();
    this.widget = new OktaSignIn({
      baseUrl: 'https://https://dev-742619.oktapreview.com',
      clientId: '0oafg4a56poxRFQzI0h7',
      redirectUri: 'http://localhost:3000',
      authParams: {
        responseType: 'id_token'
      }
    });
  }

  render(){
    return(
      <div>
      <h2>Login Page</h2>
      <div id="login-widget"></div> 
      </div>
    );
  }
}