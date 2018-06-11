import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
s
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
