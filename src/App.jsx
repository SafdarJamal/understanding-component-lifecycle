import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimaryButton from './components/PrimaryButton.jsx';
import SecondaryButton from './components/SecondaryButton.jsx';
import Social from './components/Social.jsx';
import UIButton from './components/UIButton.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PrimaryButton />
          <br />
          <SecondaryButton />
          <br />
          <br />
          <Social />
          <br />
          <br />
          <UIButton title="Hello React" />
        </header>
      </div>
    );
  }
}

export default App;
