import React, { Component } from 'react';
import headerImage from './Images/more-news-bg.jpg';
import logoImage from './Images/camel-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container  app">
        <div className="app-header">
          <img src={headerImage} className="header-image" alt="headerImage" />
        </div>
        <div className="app-intro">
           <img src={logoImage} className="header-image" alt="logoImage" /><div className= "logo-image">How many camels for your boyfriend?</div>
        </div>
      </div>
    );
  }
}

export default App;
