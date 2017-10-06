import React, { Component } from 'react';
import Header from './Header.js';
import Body from './mainBody/Body.js';
import Footer from './Footer.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body api="http://fcctop100.herokuapp.com/api/fccusers/top/" />
        <Footer/>
      </div>
     
    );
  }
}

export default App;
