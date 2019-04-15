import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimaryButton from './components/PrimaryButton.jsx';
import UIButton from './components/UIButton.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PrimaryButton />
          <br />
          <UIButton />
        </header>
      </div>
    );
  }
}

export default App;
