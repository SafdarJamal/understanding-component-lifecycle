import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
// import PrimaryButton from './components/PrimaryButton.jsx';
// import SecondaryButton from './components/SecondaryButton.jsx';
// import Social from './components/Social.jsx';
// import UIButton from './components/UIButton.jsx';
import Kid from './components/Kid.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { volume: 5 };
  }

  render() {
    const { volume } = this.state;
    console.log(volume);
    return (
      <div className="App">
        <header className="App-header">
          <Kid dressColor="green" />
        </header>
      </div>
    );
  }
}

export default App;
